import { Redis } from '@upstash/redis';

// if (!process.env.UPSTASH_REDIS_REDIS_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
//   throw new Error("Upstash Redis environment variables are missing.");
// }
function getrediscredentials() {
  const clientId = process.env.UPSTASH_URL;
  const clientSecret = process.env.UPSTASH_TOKEN;
  
  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}


export const db = new Redis({
  // url:"https://concise-llama-54610.upstash.io",
  // token:"AdVSAAIjcDE3YTdhZjExZWY2N2E0NDExYjgyOGEwZTE4NWFkNzUxM3AxMA",
  url:getrediscredentials().clientId,
  token:getrediscredentials().clientSecret,
});
