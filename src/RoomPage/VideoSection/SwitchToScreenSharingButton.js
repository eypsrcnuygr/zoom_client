import React, { useState } from "react";
import SwitchImg from "../../resources/switchToScreenSharing.svg";

const SwitchToScreenSharingButton = (props) => {
  const [isScreenShared, setIsScreenShared] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenShared(!isScreenShared);
  };

  return (
    <div className="video_button_container">
      <img
        src={SwitchImg}
        alt="share"
        onClick={handleScreenShareToggle}
        className="video_button_image"
      />
    </div>
  );
};

export default SwitchToScreenSharingButton;
