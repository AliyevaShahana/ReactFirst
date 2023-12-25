import React, { useState } from "react";
import Decrement from "../decrement";
import Increment from "../increment";
import InputByValue from "../inputByvalue";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Increment count={count} setCount={setCount} />
      {count}
      <Decrement  setCount={setCount}/>
      <br /><hr />
      <InputByValue count={count} setCount={setCount} />
    </div>
  );
};

export default Counter;
