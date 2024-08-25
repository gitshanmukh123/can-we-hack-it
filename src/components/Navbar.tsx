import Image from "next/image"
import Link from "next/link"

        const page=()=>{
        return(
            <div className="inte">
                <nav className="bg-white border-gray-200 bg-gradient-to-r from-green-950 to-black ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gamify</span>
          </a>
          
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="right_side flex items-center gap-2">
            
              <div className="buttons  flex justify-center"><ul className="flex gap-2 mr-0">
                <li>
                   <Link href={"/auth/signin"} className="login w-20 px-2 h-8 py-2.5 font-bold text-xs  bg-green-500 text-white rounded-xl">LOG IN</Link>
                </li>
                <li>
                <button className="login w-20 h-8 px-2 py-2.5 font-bold text-xs bg-green-500 text-white rounded-xl">SIGN UP</button>
                </li>
            </ul></div>
            <button type="button" className="flex text-sm bg-gradient-to-r from-black to-green-950 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
              </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-950 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                  
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            </div>
              
              
          </div>
          
         
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
           
          </div>
          
          </div>
        </nav>
        <div className="cards flex gap-4 p-20">
            <div className="card bg-gray-700 rounded w-full flex gap-2 mt-0 mb-0 px-4">
            <div className="min-h-screen flex justify-center items-center">
  <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">Home</span>
      <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">Lampara Look</h1>
      <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">#by Saca Tuerca</p>
    </div>
    <img className="w-45 px-3 flex justify-center cursor-pointer" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c221c957092339.59c8dfa58d6d7.jpg" alt="" />
    <div className="flex p-3 justify-between">
      <div className="flex items-center space-x-1.5">
        <img className="w-7 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
        <h2 className="text-white font-bold cursor-pointer text-sm">Felipe Sacudon</h2>
      </div>
      <div className="flex space-x-1.5">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">20</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="min-h-screen flex justify-center items-center">
  <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">Home</span>
      <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">Lampara Look</h1>
      <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">#by Saca Tuerca</p>
    </div>
    <img className="w-45 px-3 flex justify-center cursor-pointer" src="https://assets1.ignimgs.com/thumbs/userUploaded/2015/8/28/bestsellinggames1280-1440779592068_1280w.jpg" alt="" />
    <div className="flex p-3 justify-between">
      <div className="flex items-center space-x-1.5">
        <img className="w-7 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
        <h2 className="text-white font-bold cursor-pointer text-sm">Felipe Sacudon</h2>
      </div>
      <div className="flex space-x-1.5">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">20</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="min-h-screen flex justify-center items-center">
  <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">Home</span>
      <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">Lampara Look</h1>
      <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">#by Saca Tuerca</p>
    </div>
    <img className="w-45 px-3 flex justify-center cursor-pointer" src="https://wallpaperaccess.com/full/1657043.jpg" alt="" />
    <div className="flex p-3 justify-between">
      <div className="flex items-center space-x-1.5">
        <img className="w-7 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
        <h2 className="text-white font-bold cursor-pointer text-sm">Felipe Sacudon</h2>
      </div>
      <div className="flex space-x-1.5">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">20</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="min-h-screen flex justify-center items-center">
  <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">Home</span>
      <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">Lampara Look</h1>
      <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">#by Saca Tuerca</p>
    </div>
    <img className="w-45 px-3 flex justify-center cursor-pointer" src="https://wallpapercave.com/wp/sYZXijj.jpg" alt="" />
    <div className="flex p-3 justify-between">
      <div className="flex items-center space-x-1.5">
        <img className="w-7 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
        <h2 className="text-white font-bold cursor-pointer text-sm">Felipe Sacudon</h2>
      </div>
      <div className="flex space-x-1.5">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">20</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="min-h-screen flex justify-center items-center">
  <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">Home</span>
      <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">Lampara Look</h1>
      <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">#by Saca Tuerca</p>
    </div>
    <img className="w-45 px-3 flex justify-center cursor-pointer" src="https://i.ibb.co/zxWCR4h/Games-Online-140.jpg" alt="" />
    <div className="flex p-3 justify-between">
      <div className="flex items-center space-x-1.5">
        <img className="w-7 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
        <h2 className="text-white font-bold cursor-pointer text-sm">Felipe Sacudon</h2>
      </div>
      <div className="flex space-x-1.5">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">20</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="min-h-screen flex justify-center items-center">
  <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    <div>
      <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">Home</span>
      <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">Lampara Look</h1>
      <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">#by Saca Tuerca</p>
    </div>
    <img className="w-45 px-3 flex justify-center cursor-pointer" src="https://i1.wp.com/intheplayroom.co.uk/wp-content/uploads/2015/10/counting-boardgame-min.jpg" alt="" />
    <div className="flex p-3 justify-between">
      <div className="flex items-center space-x-1.5">
        <img className="w-7 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
        <h2 className="text-white font-bold cursor-pointer text-sm">Felipe Sacudon</h2>
      </div>
      <div className="flex space-x-1.5">
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">22</span>
        </div>
        <div className="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
          </span>
          <span className="text-gray-400 text-sm">20</span>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
            </div>
          
            </div>
            
        )
        }
        export default page