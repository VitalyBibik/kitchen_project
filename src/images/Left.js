import * as React from "react";

function SvgLeft(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 17l-5-5 5-5M18 17l-5-5 5-5"
        stroke="#EBEBEB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLeft;
