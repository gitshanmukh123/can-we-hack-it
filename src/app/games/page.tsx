import { useEffect, useState } from 'react';
import Card from '@/components/Card';

type Genre = {
  id: number;
  name: string;
};

type Developer = {
  id: number;
  name: string;
};

type Commentedpersons = {
  sessionid: string;
  profileimg: string;
  name: string;
  message: string;
};

type GameData = {
  id: number;
  slug: string;
  name: string;
  likes: string; // Adjusted type to string
  released: string;
  image: string;
  rating: number;
  description: string;
  developers: Developer[];
  genres: Genre[];
  Comments: Commentedpersons[];
};

const GamePage = ({ gameId }: { gameId: number }) => {
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        // console.log(gameId)
        const response = await fetch(`/api/games/${gameId}`);
        const data = await response.json();
        setGameData(data);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    };

    fetchGameData();
  }, [gameId]);

  useEffect(() => {
    // Fetch session data if needed
  }, []);

  return (
    <div>
      {session && gameData ? (
        <Card data={gameData} session={session} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GamePage;
