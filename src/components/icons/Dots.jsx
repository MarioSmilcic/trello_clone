const Dots = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        width="20"
        height="20"
      >
        <circle cx="12" cy="4" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="20" r="2" />
      </svg>
    </div>
  );
};

export default Dots;
