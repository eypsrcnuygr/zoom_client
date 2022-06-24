import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useNavigate } from "react-router-dom";

const ConnectingButtons = () => {
  const navigate = useNavigate();

  const pushToJoinRoomPage = () => {
    navigate("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    navigate("/join-room?host=true");
  };

  return (
    <div>
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
      />
      <ConnectingButton
        createRoomButton={true}
        buttonText="Host a meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
  );
};

export default ConnectingButtons;