import React, { useState } from "react";
import JoinRoomInputs from "./JoinRoomInputs";
import { connect } from "react-redux";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import {
  setConnectOnlyWithAudio,
  setIdentity,
  setRoomId,
} from "../store/actions";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { getRoomExist } from "../utils/api";
import { useNavigate } from "react-router-dom";

const JoinRoomContent = (props) => {
  const {
    isRoomHost,
    setConnectOnlyWithAudio,
    connectOnlyWithAudio,
    setIdentityAction,
    setRoomIdAction,
  } = props;

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleJoinRoom = async () => {
    setIdentityAction(nameValue);
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    const responseMessage = await getRoomExist(roomIdValue);

    const { roomExist, full } = responseMessage;

    if (roomExist) {
      if (full) {
        setErrorMessage("Meeting reached the max amount of participitans!");
      } else {
        setRoomIdAction(roomIdValue);
        navigate("/room");
      }
    } else {
      setErrorMessage("Room not found. Check your meeting ID!");
    }
  };

  const createRoom = () => {
    navigate("/room");
  };
  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <OnlyWithAudioCheckbox
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
      />
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispact) => {
  return {
    setConnectOnlyWithAudio: (onlyWithAudio) =>
      dispact(setConnectOnlyWithAudio(onlyWithAudio)),
    setIdentityAction: (identity) => dispact(setIdentity(identity)),
    setRoomIdAction: (roomId) => dispact(setRoomId(roomId)),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);
