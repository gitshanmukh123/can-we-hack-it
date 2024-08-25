"use client"
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'



const Page = () => {

const loginwithgoogle=async()=>{
try{
    await signIn("google")
   
}catch{
    toast.error("problem with login")
}finally{
    toast.success("logged In")
}
}







  return <div>
    <button
     onClick={loginwithgoogle}
    >
    GOOGLE</button>
  </div>
}

export default Page