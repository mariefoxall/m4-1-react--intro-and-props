import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

const App = (props) => {
  console.log(props);
  return (
    <div className="double-chat">
      <div className="wrapper">
        <Header
          participants={props.conversation.participants}
          currentUser={props.users.elaine}
        />
        <ChatStream
          messages={props.conversation.messages}
          currentUser={props.users.elaine}
        />

        <Footer />
      </div>

      <div className="wrapper">
        <Header
          participants={props.conversation.participants}
          currentUser={props.users.george}
        />
        <ChatStream
          messages={props.conversation.messages}
          currentUser={props.users.george}
        />

        <Footer />
      </div>
    </div>
  );
};

export default App;
