import * as React from "react";

function SvgFileCabinet(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M52.5 32.5h-45A2.5 2.5 0 015 30V7.5A2.5 2.5 0 017.5 5h45A2.5 2.5 0 0155 7.5V30a2.5 2.5 0 01-2.5 2.5zm-42.5-5h40V10H10v17.5z"
        fill="#000"
      />
      <path
        d="M52.5 55h-45A2.5 2.5 0 015 52.5V30a2.5 2.5 0 012.5-2.5h45A2.5 2.5 0 0155 30v22.5a2.5 2.5 0 01-2.5 2.5zM10 50h40V32.5H10V50zm31.25-31.55H19.1a2.5 2.5 0 01-2.5-2.5V7.5a2.5 2.5 0 015 0v5.95h17.15V7.5a2.5 2.5 0 015 0v8.45a2.5 2.5 0 01-2.5 2.5z"
        fill="#000"
      />
      <path
        d="M41.25 40.95H19.1a2.5 2.5 0 01-2.5-2.5V30a2.5 2.5 0 015 0v5.95h17.15V30a2.5 2.5 0 015 0v8.45a2.5 2.5 0 01-2.5 2.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgFileCabinet;
