import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       
      <ReactPlayer
        url="https://www.youtube.com/watch?v=w3aW9KRTDak"
        controls={true}
        width="500px"
        height="auto"
      />
    </div>
  );
};

export default VideoPlayer;