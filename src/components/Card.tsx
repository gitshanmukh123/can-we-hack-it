const Card = () => {
  return (
  
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
  <span className="text-gray-400 t ext-sm">20</span>
</div>
</div>
</div>
</div>
</div>
  );
};

export default Card;
