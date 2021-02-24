import React, { useEffect, useState } from "react";
import env from "./env.json"

function NasaPhoto() {
  console.log(env.nasaKey);  
  const [scrollDown, setScrollDown] = useState(false);
  const animate = () => {
    setScrollDown(prevCheck => !prevCheck);
  }

  const[photoInfo, setPhotoInfo] = useState(null);

  useEffect(() => {
      getPhoto();
  }, []);

  async function getPhoto() {
    const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${env.nasaKey}`
    )
    const info = await res.json();
    setPhotoInfo(info);
  }

  if (!photoInfo) {
    return <div />;
  } 
    
    
  return (
      <div className="media-container">
        <button onClick = {animate} className = {scrollDown ? "click" : null}> info </button>
        <div className="card-wrapper">
            <div className = {scrollDown ? "card scroll" : "card scroll-back"}>
                <div className="nasa-photo">
                    {photoInfo.media_type === "image" ? (
                        <img
                        src={photoInfo.url}
                        alt={photoInfo.title}
                        />
                        ) : (
                        <iframe
                        title="space-video"
                        src={photoInfo.url}
                        frameBorder="0"
                        gesture="media"
                        allowFullScreen
                        />
                    )}
                </div>
                <div className="photo-info">
                    <h1>{photoInfo.title}</h1>
                    <p className="date">{photoInfo.date}</p>
                    <p className="explanation">{photoInfo.explanation}</p>
                </div>
            </div>
        </div>                
      </div>
    );
}


export default NasaPhoto;