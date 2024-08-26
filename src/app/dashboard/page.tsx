import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="inte">
      <nav className="bg-white border-gray-200 bg-gradient-to-r from-green-950 to-black ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://wallpaperaccess.com/full/6494761.jpg"
              className="h-8 rounded-full"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Gamify
            </span>
          </a>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="right_side flex items-center gap-2">
              <div className="buttons flex justify-center">
                <ul className="flex gap-2 mr-0">
                  <li>
                    <button className="login w-20 px-2 h-8 py-2.5 font-bold text-xs bg-green-500 text-white rounded-xl">
                      LOG IN
                    </button>
                  </li>
                  <li>
                    <button className="login w-20 h-8 px-2 py-2.5 font-bold text-xs bg-green-500 text-white rounded-xl">
                      SIGN UP
                    </button>
                  </li>
                </ul>
              </div>
              <button
                type="button"
                className="flex text-sm bg-gradient-to-r from-black to-green-950 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
             <Link href={"/userprofile"}>   <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="user photo"
                /></Link>
              </button>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <Link
                href={"/community"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
              <Link
                href={"/userprofile"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                UserProfile
              </Link>
             
              <Link
                href={"/community"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Friends
              </Link>
              <Link
                href={"/community"}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      {/* Cards Section */}
      <div className="cards bg-slate-800 m-20 rounded-2xl  pt-16 p-10">
        <div className="head font-bold text-white text-2xl">GAME LIST</div>
        <br></br>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <br></br>
          {/* Add more <Card /> components as needed */}
        </div>
        <div className="text-white font-bold text-2xl">ABOUT SITE: </div>
        <br></br>
        <div className="text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, illo itaque. Excepturi sapiente, exercitationem, maiores porro nobis, itaque reprehenderit fugit ullam ut similique eius ratione delectus. Nisi dicta harum tempora?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor inventore totam vitae aliquam ipsa necessitatibus quod alias aut, quibusdam consequatur. Libero molestias atque a corrupti aliquid eaque porro harum cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex assumenda quis deserunt sequi nisi. Nostrum facere esse ipsa blanditiis nihil tempora, ipsam iure maiores. Eveniet accusantium qui eum possimus adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem distinctio ad minima beatae a commodi culpa harum, aliquam explicabo repellendus quo blanditiis deserunt odio provident debitis odit ut voluptas fugiat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt maiores error magnam odit ad praesentium nobis fugiat? Accusamus earum facilis ullam repellat odio? Dignissimos neque ut unde ducimus, aspernatur labore?
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
