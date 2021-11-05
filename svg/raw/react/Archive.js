import * as React from "react";

function SvgArchive(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40 51.25H20a10 10 0 01-10-10v-15a10 10 0 0110-10h20a10 10 0 0110 10v15a10 10 0 01-10 10zm-20-30a5 5 0 00-5 5v15a5 5 0 005 5h20a5 5 0 005-5v-15a5 5 0 00-5-5H20zm25-7.5H15a2.5 2.5 0 010-5h30a2.5 2.5 0 010 5z"
        fill="#000"
      />
      <path d="M32.5 28.75h-5a2.5 2.5 0 010-5h5a2.5 2.5 0 010 5z" fill="#000" />
    </svg>
  );
}

export default SvgArchive;
