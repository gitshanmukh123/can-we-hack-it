import { NextAuthOptions } from 'next-auth'
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter'
import { db } from './db'
import GoogleProvider from 'next-auth/providers/google'
import { fetchredis } from '@/helper/redis'

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  
  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}

export const authoptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/',
  },
 
  providers: [
    GoogleProvider({
      clientId:getGoogleCredentials().clientId,
      clientSecret:getGoogleCredentials().clientSecret,
      // authorization:{
      //   params:{
      //     client:{
      //       timeout:10000,
      //     }
      //   }
      // }
    },
  ),
  ],

  secret:process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      const dbUserResult = (await fetchredis('get', 'user:' + token.id)) as
        | string
        | null

      if (!dbUserResult) {
        if (user) {
          token.id = user!.id
        }

        return token
      }

      const dbUser = JSON.parse(dbUserResult) as User

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.image = token.picture as string
      }

      return session
    },
    redirect() {
      return '/dashboard'
    },
  },
}