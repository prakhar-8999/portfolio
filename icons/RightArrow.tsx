const RightArrow = ({className}: {className?: string}) => {
  return (
    <svg
      className={`w-3.5 h-3.5 ml-2 ${className}`}
      width="16"
      height="16"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   style={{
    //     transform: "",
    //     msFilter: "",
    //     marginTop: "4px",
    //     marginLeft: "10px",
    //   }}
    // >
    //   <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
    // </svg>
  );
};

export default RightArrow;
