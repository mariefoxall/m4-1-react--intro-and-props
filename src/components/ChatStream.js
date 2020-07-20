import React from "react";

import "./ChatStream.css";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  console.log(props);

  return (
    <section className="chat-stream">
      <ol>
        {props.messages.map((message) => {
          return <li>{message.body}</li>;
        })}
      </ol>
    </section>
  );
};

export default ChatStream;
