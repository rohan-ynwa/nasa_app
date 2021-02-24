import React from 'react';
import stars from './starry.mp4';

function Background() {
  return (
    <video id="background-video" loop autoPlay muted playsInline >
      <source src={stars} type="video/mp4" poster="starry.png"/>
      Your browser does not support the video tag.
    </video>
  );
}

export default Background;