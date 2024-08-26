'use client';

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
    const response = await fetch(`${BASE_URL}/3498?key=cec0a0e007be4874b5b784659247d6cc`);
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
  const [fav, setFav]=useState(false);
  const handleLike=()=>{
    console.log('Liked!');
    setFav(!fav);
  }
  return (
    <div>
      <h1 className="text-6xl text-center text-green-400 font-bold p-3 m-10">
        {game?.name}
      </h1>
      
      <div className="flex flex-row items-start justify-center">
        <Card sx={{ maxWidth: 600, backgroundColor: '#9b59b6' }} className="m-10">
          <CardHeader className="text-white-custom"
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
            title="Game Description"      
          />
          {game?.background_image && (
            <CardMedia
              component="img"
              height="194"
              image={game.background_image}
              alt={game.name}
            />
          )}
          <CardContent className="bg-purple-600 text-green-100">
            <Typography variant="subtitle1" className="text-white-custom ">
              <div
                dangerouslySetInnerHTML={{
                  __html: expanded ? sanitizedFullDescription : sanitizedPreview,
                }}
              />
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={handleLike} sx={{color:fav?'#ff0000' : 'gray' }}/>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {/* Add any additional content or details here if needed */}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}

export default Page;
