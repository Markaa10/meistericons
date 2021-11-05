import * as React from "react";

function SvgNavigation(props) {
  return (
    <svg
      width={60}
      height={60}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45.675 55a5.375 5.375 0 01-3.85-1.625L30.35 42a.525.525 0 00-.7 0L18.175 53.475a5.475 5.475 0 01-8.95-5.975L25 8.35a5.5 5.5 0 0110.2 0L50.775 47.5a5.501 5.501 0 01-5 7.5h-.1zM30 10a.45.45 0 00-.45.3l-15.7 39.125a.45.45 0 00.2.575.425.425 0 00.6 0l11.475-11.475a5.45 5.45 0 017.75 0L45.35 50a.425.425 0 00.6 0 .45.45 0 00.2-.575L30.45 10.2A.45.45 0 0030 10z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgNavigation;
