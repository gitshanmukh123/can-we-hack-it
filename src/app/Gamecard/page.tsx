'use client';
import './style.css';
import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const RAWG_API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.rawg.io/api/games';

export const fetchGameDetails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/3495?key=cec0a0e007be4874b5b784659247d6cc`);
    if (!response.ok) {
      throw new Error('Failed to fetch game details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    return null;
  }
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Page: React.FC = () => {
  const [game, setGame] = useState<any>({});
  const [expanded, setExpanded] = useState<boolean>(false);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const getGameDetails = async () => {
      const data = await fetchGameDetails();
      setGame(data);
    };
    getGameDetails();
  }, []);

  const truncateHTML = (html: string, wordCount: number): string => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    
    let text = tempDiv.innerText || tempDiv.textContent || '';
    const words = text.split(' ');
    
    if (words.length > wordCount) {
      text = words.slice(0, wordCount).join(' ') + '...';
    }
    
    return text;
  };

  const previewDescription = game?.description ? truncateHTML(game.description, 100) : '';
  const sanitizedPreview = DOMPurify.sanitize(previewDescription);
  const sanitizedFullDescription = game?.description ? DOMPurify.sanitize(game.description) : '';

  const handleLike = () => {
    console.log('Liked!');
    setFav(!fav);
  };

  return (
    <div>
      <div className="header ">
        <h1 className="text-3xl bg-gradient-to-r from-yellow-500 to-red-900 text-transparent bg-clip-text text-center m-0 text-white font-bold p-3 ">
          {game?.name}
        </h1>
      </div>
      <div
  className="body flex gap-4 p-4 bg-gray-500 m-4 rounded-2xl relative"
  style={{
    backgroundImage: `url(${game?.background_image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="overlay absolute inset-0 bg-white opacity-30 rounded-2xl"></div>
  <div className="bodyl bg-black mt-10 rounded-2xl p-8 h-96 w-2/5 relative z-10"
  >
    {game?.background_image && (
      <CardMedia
        component="img"
        height="194"
        image={game.background_image}
        alt={game.name}
      />
    )}
    <br />
    <div className="game-info game-info-title">Game Title: {game.name}</div>
<div className="game-info">Released At: {game.released}</div>
<div className="game-info">Rating: {game.rating}</div>

  </div>
  <div className="bodyr w-3/5 flex text-white flex-row pt-0 rounded-2xl items-start justify-center relative z-10">
    <Card sx={{ maxWidth: 600, backgroundColor: '#052e16' }} className="mt-10 rounded-2xl">
      <CardHeader
        className="text-white-custom bg-black rounded-md text-bold text-red-700 decoration-8"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            G
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="GAME DESCRIPTION"
      />
      <CardContent className="bg-black text-green-100"
      style={{
        backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4bef797b-9bf3-4121-84e6-136f01594d15/de7ei11-d4ab0b18-fc1b-4b86-9c0e-453e1458581d.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
        <Typography variant="subtitle1" className="text-white-custom">
          <div
            dangerouslySetInnerHTML={{
              __html: expanded ? sanitizedFullDescription : sanitizedPreview,
            }}
          />
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="bg-black">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={handleLike} sx={{ color: fav ? 'red' : 'gray' }} />
        </IconButton>
        <IconButton aria-label="share"
        sx={{ color: fav ? 'gray' : 'gray' }}>
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ color: fav ? 'gray' : 'gray' }}
          >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit className="bg-black">
        <CardContent>
          <Typography paragraph>
            {/* Add any additional content or details here if needed */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  </div>
</div>

    </div>
  );
};

export default Page;