import React from "react";
import  loginVideo  from "../assets/loginVideo.mp4";

const LoginPage = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={loginVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default LoginPage;
