import * as React from "react";

function SvgUserTie(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 35a15 15 0 110-29.998A15 15 0 0130 35zm0-25a10 10 0 100 20 10 10 0 000-20z"
        fill="#000"
      />
      <path
        d="M52.5 55a2.5 2.5 0 01-2.5-2.5A17.5 17.5 0 0032.5 35h-5A17.5 17.5 0 0010 52.5a2.5 2.5 0 01-5 0A22.5 22.5 0 0127.5 30h5A22.5 22.5 0 0155 52.5a2.5 2.5 0 01-2.5 2.5z"
        fill="#000"
      />
      <path
        d="M30 55a2.5 2.5 0 01-1.775-.725l-2.5-2.5a2.502 2.502 0 01-.7-2.125l2.5-17.5a2.5 2.5 0 015 0l2.5 17.5a2.5 2.5 0 01-.7 2.125l-2.5 2.5A2.5 2.5 0 0130 55z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgUserTie;
