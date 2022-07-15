import React from "react";
import Video from "../assets/video/build.mp4";

const Loader = () => {
  
  return (
    <div className="page-loader">
      <video id="bgVideo" src={Video} autoPlay loop muted></video>
    </div> 
  );
};

export default Loader;
