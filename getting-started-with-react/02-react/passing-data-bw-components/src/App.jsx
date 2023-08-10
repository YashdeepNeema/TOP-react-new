import React from "react";
import ButtonProps from "./components/ButtonProps";

const App = () => {
  const handleClickHere = (cat) => {
    console.log(cat);
    window.location.href = "https://www.google.com/" + cat;
  };
  return (
    <div>
      {/* <ButtonProps text="click" fontSize={12} color="blue" />
      <ButtonProps text="click" fontSize={18} color="green" /> */}
      <ButtonProps
        handleClick={handleClickHere}
        text="click"
        fontSize={20}
        color="red"
      />
    </div>
  );
};

export default App;
