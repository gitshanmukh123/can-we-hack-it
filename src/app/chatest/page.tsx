'use client';

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { useRouter } from "next/router";
import { fetchredis } from "@/helper/redis";

interface Genre {
  id: number;
  name: string;
}

interface Developer {
  id: number;
  name: string;
}

interface Commentedpersons {
  sessionid: string;
  profileimg: string;
  name: string;
  message: string;
}

interface GameData {
  id: number;
  slug: string;
  name: string;
  likes: number;
  released: string;
  image: string;
  rating: number;
  Comments: Commentedpersons[];
  developers: Developer[];
  genres: Genre[];
  description: string;
}

const Page = () => {
  const [session, setSession] = useState<any>(null);
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState<GameData[]>([]);
  const router = useRouter;

  useEffect(() => {
    const fetchSession = async () => {
      const sessionDetails = await getSession();
      if (!sessionDetails) {
        throw new Error("User not authenticated");
      }
      setSession(sessionDetails);
    };

    if (session === null) {
      fetchSession();
    }
  }, [session]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetchredis("smembers", `user:1:image`) as string[];
        const parsedData: GameData[] = res.map(item => JSON.parse(item));
        setImages(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!session) {
      console.log("User not authenticated");
      return;
    }

    try {
      await db.sadd(`user:${imagedata.id}:comments`, JSON.stringify({ sessionid: session.user.id, message: inputValue }));
      console.log("Comment submitted successfully");

    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };


  const imagedata: GameData = {
    id: 3496,
    slug: "escape-dead-island",
    name: "Escape Dead Island",
    likes: 0, // Change to number
    released: "2014-11-18",
    image: "https://example.com/escape-dead-island.jpg",
    rating: 2.77,
    description: "Escape Dead Island is a Survival-Mystery game set on the island of Narapela. The game allows you to delve deeper into the Dead Island universe and unravel the origins of the zombie outbreak.",
    developers: [
      {
        id: 22,
        name: "Deep Silver"
      },
      {
        id: 3522,
        name: "Fatshark"
      }
    ],
    genres: [
      {
        id: 4,
        name: "Action"
      },
      {
        id: 3,
        name: "Adventure"
      }
    ],
    Comments: [
      {
        sessionid: "1",
        profileimg: "https://example.com/user1.jpg",
        name: "User One",
        message: "Great game, but could have been better."
      },
      {
        sessionid: "2",
        profileimg: "https://example.com/user2.jpg",
        name: "User Two",
        message: "Loved the storyline!"
      }
    ]
  };

  return (
    <div className="flex h-screen antialiased text-gray-800 justify-center bg-gradient-to-r from-green-950 to-black">
      <div className="flex flex-col flex-auto h-full p-6" style={{ maxWidth: "700px" }}>
        <div
          className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 opacity-60"
          style={{
            backgroundImage: "url('https://www.austintechnologycouncil.org/wp-content/uploads/2020/05/gaming-2_orig.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              <div className="grid grid-cols-12 gap-y-2">
                <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>Hey, how are you today?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <form onSubmit={handleSubmit}>
                  <input
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    placeholder="Type your message here..."
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                  />
                  <button
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white p-2"
                    type="submit"
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
                </form>
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white p-2"
                type="submit"
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
  );
};

export default Page;
