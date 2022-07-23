import React from "react";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantSection from "./ParticipitantSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import RoomLabel from "./RoomLabel";
import { connect } from "react-redux";

import "./RoomPage.css";

const RoomPage = ({ roomId }) => {
  return (
    <div className="room_container">
      <ParticipantSection />
      <VideoSection />
      <ChatSection />
      <RoomLabel roomId={roomId} />
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);
