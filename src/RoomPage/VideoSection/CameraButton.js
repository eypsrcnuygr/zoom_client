import React, { useState } from "react";
import CameraButtonImg from "../../resources/camera.svg";
import CameraButtonImgOff from "../../resources/cameraOff.svg";

const CameraButton = (props) => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <div className="video_button_container">
      <img
        src={isLocalVideoDisabled ? CameraButtonImgOff : CameraButtonImg}
        alt="camera"
        onClick={handleCameraButtonPressed}
        className="video_button_image"
      />
    </div>
  );
};

export default CameraButton;
