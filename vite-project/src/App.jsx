import React from "react";
import "./components/todo/style.sass";
import "./components/Weather/style.sass";
import Todo from "./components/todo/Todo";
import Temp from "./components/Weather/Temp";

function App() {
  return (
    <>
      <Todo />
      <Temp />
    </>
  );
}

export default App;
