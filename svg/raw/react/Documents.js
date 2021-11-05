import * as React from "react";

function SvgDocuments(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M42.5 52.5h-25a10 10 0 01-10-10v-15a10 10 0 0110-10h25a10 10 0 0110 10v15a10 10 0 01-10 10zm-25-30a5 5 0 00-5 5v15a5 5 0 005 5h25a5 5 0 005-5v-15a5 5 0 00-5-5h-25z"
        fill="#000"
      />
      <path
        d="M10 32.5A2.5 2.5 0 017.5 30V10A2.5 2.5 0 0110 7.5h12.5a2.5 2.5 0 011.125.275l20 10a2.5 2.5 0 01-2.25 4.45L21.9 12.5h-9.4V30a2.5 2.5 0 01-2.5 2.5z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgDocuments;
