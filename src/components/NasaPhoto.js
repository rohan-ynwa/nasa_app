import React, { useEffect, useState } from "react";

function NasaPhoto() {

  const [scrollDown, setScrollDown] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);

  const animate = () => {
    //check if in on load condition
    if (scrollDown === false && scrollUp === false) {
      setScrollDown(prevCheck => !prevCheck);
    }
    //toggle both states
    else {
      setScrollDown(prevCheck => !prevCheck);
      setScrollUp(prevCheck => !prevCheck);
    }
  }

  const[photoInfo, setPhotoInfo] = useState(null);

  useEffect(() => {
    async function getPhoto() {
      const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`
      )
      const info = await res.json();
      setPhotoInfo(info);
    }
    
    getPhoto();
  }, []);


  if (!photoInfo) {
    return <div />;
  } 
    
  return (
      <div className ="content-container">
        <div className = {scrollDown ? "button-wrapper click" : (scrollUp ? "button-wrapper click-back" : "button-wrapper")}>
          <button onClick = {animate} className = {scrollDown ? "click" : null}> about </button>
        </div>
        <div className = "card-wrapper">
            <div className = {scrollDown ? "card scroll" : (scrollUp ? "card scroll-back" : "card")}>
              <div className ="nasa-photo">
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