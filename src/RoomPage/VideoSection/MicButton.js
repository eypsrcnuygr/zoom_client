import React, { useState } from "react";
import MicButtonImg from "../../resources/mic.svg";
import MicButtonImgOff from "../../resources/micOff.svg";

const MicButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleMicButtonPressed = () => {
    setIsMuted(!isMuted);
  };
  return (
    <div className="video_button_container">
      <img
        src={isMuted ? MicButtonImgOff : MicButtonImg}
        alt="button"
        onClick={handleMicButtonPressed}
        className="video_button_image"
      />
    </div>
  );
};

export default MicButton;
