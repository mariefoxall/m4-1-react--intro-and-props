import React from "react";

import "./ChatMessage.css";

const ChatMessage = (props) => {
  return (
    <div className="chat-message">
      <p className="username">{props.message.user.username}</p>
      <div className="image-bubble">
        <img
          className="avatar"
          src={props.message.user.avatar}
          alt="current user"
        />
        <p className="message-text">{props.message.body}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
