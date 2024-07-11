import React from "react";

const ArrowLeft = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <svg
        fill="none"
        width="24px"
        height="24px"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </div>
  );
};

export default ArrowLeft;
