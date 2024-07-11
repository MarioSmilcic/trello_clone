import React from "react";

const ArrowRight = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <svg
        fill="none"
        // width="24px"
        // height="24px"
        width="20px"
        height="20px"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
};

export default ArrowRight;
