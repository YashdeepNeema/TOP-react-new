import React from "react";

const ButtonProps = ({ text, color, fontSize, handleClick }) => {
  const btnStyle = {
    color: color,
    fontSize: fontSize + "px",
  };
  return (
    <button onClick={() => handleClick("search?q=cat")} style={btnStyle}>
      {text}
    </button>
  );
};

export default ButtonProps;

// The Button functional component now receives props as a function argument.
// The individual properties are then referenced within the component via props.propertyName.
// But we should always use props destructuring::
// When rendering the Button components within App, the prop values are defined on each component.
// Inline styles are dynamically generated and then applied to the button element.
//
