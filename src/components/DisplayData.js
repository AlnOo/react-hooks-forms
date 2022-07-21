import React from "react";

function DisplayData(props) {
    const {firstName, lastName} = props
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </div>
  );
}

export default DisplayData;