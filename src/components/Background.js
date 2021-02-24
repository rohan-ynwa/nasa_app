import React from 'react';
import stars from './starry.mp4';
import star from './starry.png';;

function Background() {
  return (
    <video id="background-video" loop autoPlay muted playsInline >
      <source src={stars} type="video/mp4" poster={star}/>
      Your browser does not support the video tag.
    </video>
  );
}

export default Background;