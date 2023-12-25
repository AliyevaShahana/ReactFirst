import React from "react";

const Decrement = ({ setCount }) => {
  return (
    <button
      onClick={() => {
        setCount((count) => count - 1);
      }}
    >
      Decrement
    </button>
  );
};

export default Decrement;
