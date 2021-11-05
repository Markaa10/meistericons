import * as React from "react";

function SvgVolume(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M47.5 53.1a2.5 2.5 0 01-1.275-.35l-22.75-13.375H12.5a2.5 2.5 0 01-2.5-2.5v-13.75a2.5 2.5 0 012.5-2.5h10.975L46.225 7.25a2.5 2.5 0 013.75 2.15v41.2a2.5 2.5 0 01-1.25 2.15 2.5 2.5 0 01-1.225.35zM15 34.375h9.175a2.5 2.5 0 011.25.325L45 46.225v-32.5L25.425 25.25a2.5 2.5 0 01-1.25.325H15v8.8z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgVolume;
