import React, { useEffect } from "react";
import "./JoinRoomPage.css";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import JoinRoomTitle from "./JoinRoomPageTitle";

const JoinRoomPage = (props) => {
  const { setIsRoomHostAction, isRoomHost } = props;

  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      setIsRoomHostAction(true);
    }
  }, [search, setIsRoomHostAction]);
  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        {" "}
        <JoinRoomTitle isRoomHost={isRoomHost} />
      </div>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispact) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispact(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
