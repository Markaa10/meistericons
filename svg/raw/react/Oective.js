import * as React from "react";

function SvgOective(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 38.625A8.625 8.625 0 1138.625 30 8.65 8.65 0 0130 38.625zm0-12.25a3.625 3.625 0 100 7.25 3.625 3.625 0 000-7.25z"
        fill="#000"
      />
      <path
        d="M30 46.825A16.825 16.825 0 1146.825 30 16.85 16.85 0 0130 46.825zm0-28.65a11.825 11.825 0 100 23.651 11.825 11.825 0 000-23.65z"
        fill="#000"
      />
      <path
        d="M30 55a25 25 0 110-49.999A25 25 0 0130 55zm0-45a20 20 0 100 40 20 20 0 000-40z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgOective;
