import React from "react";

export default function ObjectPropChild({ userName, password }) {
  return (
    <React.Fragment>
      <div>Object child</div>
      <div>{userName}</div>
      <div>{password}</div>
    </React.Fragment>
  );
}
