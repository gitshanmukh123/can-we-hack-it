'use client';

import { useState } from "react";

const Page = () => {
    const [inputValue, setInputValue]=useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };
    const handleSubmit=(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        console.log('submit');
    }
  return (
    <div>
<div className="flex h-screen antialiased text-gray-800 rounded-2xl justify-center bg-gray-950">
        <div className=" flex flex-col flex-auto h-full p-6" style={{ maxWidth: "700px" }}>
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 opacity-60" 
            style={{
              backgroundImage: "url('https://www.austintechnologycouncil.org/wp-content/uploads/2020/05/gaming-2_orig.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="flex flex h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Hey, whats up?</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    placeholder="Type your message here..."
                    type="text"
                    value={inputValue}
                   onChange={handleChange}/>
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white p-2"
                 type="submit"
                //  onClick={handleSubmit}
                >
                  <span className="sr-only">Send</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 10l4.553-4.553a1 1 0 00-1.415-1.414l-15 15a1 1 0 001.414 1.415L9 15h6l.5-.5V12l-.75-.75zM4 10V5a2 2 0 012-2h8a1 1 0 100-2H6a4 4 0 00-4 4v5.5L4 10z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page;