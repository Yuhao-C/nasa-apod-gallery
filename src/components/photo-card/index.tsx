/* eslint-disable @typescript-eslint/naming-convention */
import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import { PhotoCardInfo } from '@/types/photo-card';
import likeAnimation from '@/assets/lottie/like.json';

import './index.less';

const PhotoCard: React.FC<PhotoCardInfo> = props => {
  const { date, explanation, hdurl, title, img_element } = props;

  const imgContainerRef = useRef<HTMLImageElement>(null);

  const [isLottieStopped, setIsLottieStopped] = useState(true);
  const [isLottiePaused, setIsLottiePaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: likeAnimation,
  };

  const onLikeClick = () => {
    if (isAnimating) {
      return;
    }
    if (isLottiePaused) {
      setIsLottiePaused(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsLottieStopped(true);
        setIsAnimating(false);
      }, 600);
    } else {
      setIsLottieStopped(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsLottiePaused(true);
        setIsAnimating(false);
      }, 600);
    }
  };

  useEffect(() => {
    img_element.setAttribute('alt', `Astronomy Picture of the Day on ${date}`);
    img_element.onclick = () => {
      window.open(hdurl);
    };
    if (imgContainerRef.current) {
      if (imgContainerRef.current.firstChild) {
        imgContainerRef.current.replaceChild(
          img_element,
          imgContainerRef.current.firstChild,
        );
      } else {
        imgContainerRef.current.appendChild(img_element);
      }
    }
  });

  return (
    <Card>
      <CardActionArea>
        <Tooltip arrow title="Open HD Image" placement="top-end">
          <div className="img-container" ref={imgContainerRef} />
        </Tooltip>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {explanation}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="like"
          onClick={onLikeClick}
          sx={{ padding: '0px' }}
        >
          <Lottie
            options={lottieOptions}
            height={40}
            width={40}
            isStopped={isLottieStopped}
            isPaused={isLottiePaused}
            speed={2}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
