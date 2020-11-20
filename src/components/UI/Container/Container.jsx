import React from "react";

const Container = (props) => {
  return (
    <div
      className="uContainer"
    >
      {props.children}
    </div>
  );
};

export default Container;
