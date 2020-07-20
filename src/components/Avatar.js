import React from "react";

const Avatar = (props) => {
  return (
    <img
      className="header-avatar"
      src={props.src}
      alt={`user avatar for ${props.username}`}
      style={{ height: props.size, width: props.size }}
    />
  );
};

export default Avatar;
