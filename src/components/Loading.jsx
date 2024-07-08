import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="loader-container fixed top-0 left-0 w-full h-full bg-white opacity-75 flex items-center justify-center z-50" >
      <  BounceLoader color="#000000" loading={true} height={4} width={150} />
    </div>
  );
};

export default Loading;

