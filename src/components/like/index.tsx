import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { IconButton } from '@mui/material';
import animationData from '@/assets/lottie/like.json';

const Like: React.FC<Record<never, never>> = () => {
  const [isStopped, setIsStopped] = useState(true);
  const [direction, setDirection] = useState(1);
  const [isLike, setIsLike] = useState(false);

  const defaultOptions = {
    animationData,
    loop: false,
    autoplay: false,
  };

  const handleClick = () => {
    if (!isStopped) {
      setDirection(direction * -1);
    }
    setIsStopped(false);
    setIsLike(!isLike);
  };

  return (
    <IconButton aria-label="like" onClick={handleClick} sx={{ padding: '0px' }}>
      <Lottie
        options={defaultOptions}
        speed={2.5}
        height={40}
        width={40}
        isStopped={isStopped}
        direction={direction}
      />
    </IconButton>
  );
};

export default Like;
