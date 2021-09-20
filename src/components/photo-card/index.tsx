/* eslint-disable @typescript-eslint/naming-convention */
import React, { useRef, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  Tooltip,
} from '@mui/material';
import Like from '@/components/like';
import { PhotoCardInfo } from '@/types/photo-card';

import './index.less';

const PhotoCard: React.FC<PhotoCardInfo> = props => {
  const { date, explanation, hdurl, title, img_element } = props;

  const imgContainerRef = useRef<HTMLImageElement>(null);

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
        <Like />
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
