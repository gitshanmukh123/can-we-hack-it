'use client';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { db } from '@/lib/db';
import Link from 'next/link';

const Card = ({ data, session }: { data: any; session: any }) => {
  const [count, setCount] = useState<number>(data.likes || 0); // Initialize with default value if data.likes is undefined
  const [fav, setFav] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [commentedPersons, setCommentedPersons] = useState<{ sessionid: string; profileimg: string; name: string; message: string; }[]>([]);

  const handleLike = async () => {
    setFav(!fav);
    const newCount = fav ? count - 1 : count + 1;
    setCount(newCount);
    try {
      await db.set('user:' + data.id + ':likes', newCount);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = () => {
    const newComment = {
      sessionid: session?.user?.email || '',
      profileimg: session?.user?.image || '',
      name: session?.user?.name || '',
      message: message,
    };

    setCommentedPersons([...commentedPersons, newComment]);
    setMessage(''); // Clear the message input after sending
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-[14rem] container bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div>
          <span className="text-white text-[0.75rem] font-bold rounded-lg bg-green-500 inline-block mt-3 ml-3 py-1 px-3 cursor-pointer">
            Home
          </span>
          <h1 className="text-xl mt-1.5 ml-3 font-bold text-white cursor-pointer hover:text-gray-300 transition duration-100">
            {data.name || 'Lampara Look'}
          </h1>
          <p className="ml-3 mt-0.5 mb-1.5 text-gray-400 text-sm hover:underline cursor-pointer">
            #{data.description || 'by Saca Tuerca'}
          </p>
        </div>
        <img
          className="w-45 px-3 flex justify-center cursor-pointer"
          src={data.image || 'https://via.placeholder.com/150'} // Fallback image
          alt={data.name || 'Game Image'}
        />
        <div className="flex p-3 justify-between">
          <div className="flex items-center space-x-1.5">
            <img
              className="w-7 rounded-full"
              src={data.image || 'https://via.placeholder.com/50'} // Fallback image
              alt="Profile"
            />
            <h2 className="text-white font-bold cursor-pointer text-sm">
              {data.developers[0]?.name || 'Unknown Developer'}
            </h2>
          </div>
          <div className="flex space-x-1.5">
            <div className="flex space-x-1 items-center">
              <Link href="/gamecard">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </Link>
              <span className="text-gray-400 text-sm">22</span>
            </div>
            <div className="flex space-x-1 items-center">
              <span>
                <IconButton onClick={handleLike}>
                  <FavoriteIcon style={{ color: fav ? '#ff0000' : 'gray' }} />
                </IconButton>
              </span>
              <span className="text-gray-400 text-sm">{count}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-4.553a1 1 0 00-1.415-1.414l-15 15a1 1 0 001.414 1.415L9 15h6l.5-.5V12l-.75-.75zM4 10V5a2 2 0 012-2h8a1 1 0 100-2H6a4 4 0 00-4 4v5.5L4 10z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-4">
            <button
              onClick={handleSendMessage}
              className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white p-2"
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
                <path d="M15 10l4.553-4.553a1 1 0 00-1.415-1.414l-15 15a1 1 0 001.414 1.415L9 15h6l.5-.5V12l-.75-.75zM4 10V5a2 2 0 012-2h8a1 1 0 100-2H6a4 4 0 00-4 4v5.5L4 10z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
