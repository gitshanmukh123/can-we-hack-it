
import React from 'react';
import './style.css'
const Page = () => {
  return (
    <div className="main mt-8 flex justify-center items-center min-h-screen min-w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "linear-gradient(to right bottom, rgba(blue, 0.5), rgba(green, 0.5)), url('http://i.imgur.com/woUbg3p.jpg')" }}>
      <div className="rounded-2xl shadow-lg overflow-hidden w-[80vw]">
        <div id="header" className="h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('http://i.imgur.com/woUbg3p.jpg')" }}>
        </div>
        <div id="profile" className="relative box-border h-screen bg-black pt-10 p-6 font-sans text-white">
          <div className="image absolute top-[-55px] left-[20px] h-[80px] w-[80px] border-[3px] border-white rounded-lg">
            <img src="https://a4-images.myspacecdn.com/images03/2/85a286a4bbe84b56a6d57b1e5bd03ef4/300x300.jpg" className="w-full h-full rounded-md" alt="Daft Punk" />
          </div>
          <div className="name text-2xl font-extrabold">
            Daft Punk
          </div>
          
          <div className="bottom mt-10 flex justify-center gap-40">
            <div className="f_cnt flex gap-2 items-center">
              <img src="friend.jpeg" className="w-10 h-10" alt="Friends" />
              <div className="friends bg-slate-800 rounded-xl p-2 flex items-center">
                <span className="font-bold text-xl mr-2">170</span> Friends
              </div>
            </div>
            <div className="g_cnt flex gap-2 items-center">
              <img src="hearts.jpeg" className="w-10 h-10" alt="Liked Games" />
              <div className="games bg-slate-800 rounded-xl p-2 flex items-center">
                <span className="font-bold text-xl mr-2">170</span> Liked Games
              </div>
            </div>
          </div>
          <br/>
          <div className="sections">
            


          <nav className="border-gray-200 bg-gray-50 rounded-xl dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-full flex flex-wrap items-center justify-center mx-auto p-2">
    {/* <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
      <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Games</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;