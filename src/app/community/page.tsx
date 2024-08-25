"use client"
import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getSession } from 'next-auth/react';

const page = ({}) => {

    const [mess, setmess] = useState<string>("")
    const [session, setSession] = useState<any>(null);
    const [id, setid] = useState<string>("")

    const  handleinputchange=async(e:React.ChangeEvent<HTMLInputElement>)=>{
       setmess(e.target.value);
    }

    useEffect(() => {
        if(session==null){
         const fetchSession = async () => {
           const sessionDetails = await getSession();
           if (!sessionDetails) {
             throw new Error("User not authenticated");
           }
           console.log(sessionDetails)
           setSession(sessionDetails);
         };
      
         fetchSession();
      
        }
      
       }, []);
     
    // const fetchData=async()=>{

    //     if (session&&userdocs!=null) {
      
    //         try {
    //           console.log(session.user.email)
    //           const userdocurls = (await fetchredis("smembers",`user:${session.user.id}:docurls`)) as string[];
    //           setuserdocs(userdocurls);
    //         } catch (err) {
    //           console.error("Error fetching user document URLs from Redis:", err);
    //         }
      
      
    //     }
    //     else{
    //       console.log("Try Login again")
    //     }
    //   }

    // const promiseToast= async () => {
    //     toast.promise(fetchData(), {
    //       loading: "Fetching data",
    //       success: () => {
    //         return "Docs fetched successfully";
    //       },
    //       error: (error) => {
    //         return error.message; 
    //       }
    //     });
    //   };
      
    //   useEffect(() => {
    //    promiseToast();
    //   }, [session])

    const handlesubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
       console.log("session"+session)
       console.log("mess"+mess)
        if (!mess || !session) {
            alert("NO message entered || NO session found");
            return;
        }
        

    
        const form = new FormData();
        form.set("message", mess);
        form.set("session", JSON.stringify(session));
        // Assuming 'id' is set somewhere in your component or fetched dynamically
        const imageId = "3498"; // Or dynamically set `id` value here
    
        try {
            const res = await fetch(`/api/reviewimage/${imageId}`, {
                method: "POST",
                body: form,
            });
             
            if (res.ok) {
                alert("Form submitted successfully!");
            } else {
                alert("Form submission failed!");
            }
        } catch (error) {
            alert("Form not submitted!");
            console.error("Error submitting form:", error);
        }
    };
    

  return (<div>
    <form onSubmit={handlesubmit}>
    <input type={'text'} className='text-black' value={mess} onChange={(e)=>{handleinputchange(e)}}/>
    <button type='submit'>send</button>
    </form>
  </div>)
}

export default page;
