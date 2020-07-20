import React from "react";
import Avatar from "./Avatar";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  if (props.messageType === "received") {
    return <ReceivedMessage message={props.message} />;
  } else {
    return <SentMessage message={props.message} />;
  }
};

const ReceivedMessage = (props) => {
  return (
    <div className="received-chat-message">
      <p className="username">{props.message.user.username}</p>
      <div className="image-bubble">
        <Avatar
          src={props.message.user.avatar}
          size="40px"
          username={props.message.user.username}
        />
        <p className="received-message-text">{props.message.body}</p>
      </div>
    </div>
  );
};

const SentMessage = (props) => {
  return (
    <div className="sent-chat-message">
      <p className="sent-message-text">{props.message.body}</p>
    </div>
  );
};

export default ChatMessage;
