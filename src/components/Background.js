import React from 'react';
import starvid from './stars.webm';
import starvid2 from './starry.mp4';
import starimg from './starry.png';

function Background() {
  return (
    <video id="background-video" loop autoPlay muted playsInline poster={starimg}>
      <source src={starvid} type="video/webm"/>
      <source src={starvid2} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}

export default Background;