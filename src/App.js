import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions";
const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Simple task going on </h1>
      <button onClick={() => dispatch(incNum(5))}>*</button>
      <p>{myState}</p>
      <button onClick={() => dispatch(decNum(5))}>/</button>
    </div>
  );
};

export default App;
