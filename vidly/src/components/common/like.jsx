import React from "react";

//Input: Liked - boolean
//Output: onClick

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) {
    classes += "-o";
  }

  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onLike}
      className={classes}
    ></i>
  );
};

export default Like;
