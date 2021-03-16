import React from "react";

const Navigator = (props) => {
  return (
    <div className="button">
      <button id="previous-button" onClick={props.previous}>
        &#x3c; Previous
      </button>

      <div>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
      </div>

      <button id="next-button" onClick={props.next}>
        Next &#x3e;
      </button>
    </div>
  );
};

export default Navigator;
