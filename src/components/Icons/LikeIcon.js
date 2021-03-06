import * as React from "react";

function LikeIcon(props) {
  return (
    <svg
      width={22}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.84 1.612a5.5 5.5 0 00-7.78 0L11 2.672l-1.06-1.06a5.501 5.501 0 10-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
        fill="#EBEBEB"
      />
    </svg>
  );
}

export default LikeIcon;
