import React from "react";

const Dots = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        fill="#9fadbc"
        width="20px"
        height="20px"
      >
        <circle cx="128" cy="128" r="10" />
        <circle cx="64" cy="128" r="10" />
        <circle cx="192" cy="128" r="10" />
      </svg>
    </div>
  );
};

export default Dots;
