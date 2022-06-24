import React, { useEffect } from "react";
import logo from "../resources/logo.png";
import "./IntroductionPage.css";
import ConnectingButtons from "./ConnectingButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, [setIsRoomHostAction]);
  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image" alt="logo"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispact) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispact(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
