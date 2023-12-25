import React, { useState } from "react";

const InputByValue = ({ count, setCount }) => {
  const [input, setInput] = useState(0);
  return (
    <>
      <input type="number" onChange={(e) =>setInput((e.target.valueAsNumber))} />
      <button onClick={()=>setCount(count+input)}> click</button>
    </>
  );
};

export default InputByValue;
