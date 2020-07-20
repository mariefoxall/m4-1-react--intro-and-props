import React from "react";

import "./Header.css";
import Avatar from "./Avatar";

const Header = (props) => {
  return (
    <header>
      {props.participants
        .filter(
          (participant) => participant.username !== props.currentUser.username
        )
        .map((participant) => {
          return (
            <div className="header-name-avatar">
              <Avatar
                src={participant.avatar}
                size="40px"
                username={participant.username}
              />
              <p>{participant.username}</p>
            </div>
          );
        })}
    </header>
  );
};

export default Header;
