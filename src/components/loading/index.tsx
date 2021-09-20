import React from 'react';
import Lottie, { Options } from 'react-lottie';
import loadingAnimation from '@/assets/lottie/loading.json';

const Loading: React.FC<Record<never, never>> = () => {
  const options: Options = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
  };

  return <Lottie options={options} height={300} width={300} speed={2} />;
};

export default Loading;
