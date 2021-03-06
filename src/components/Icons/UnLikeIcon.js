import * as React from "react";

function UnLikeIcon(props) {
  return (
    <svg
      width={22}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.133 2.319h0a4.502 4.502 0 010 6.366h0l-1.06 1.06L11 16.818 3.927 9.745l-1.06-1.06a4.501 4.501 0 016.366-6.366l1.06 1.06.707.707.707-.707 1.06-1.06h0a4.5 4.5 0 016.366 0z"
        stroke="#EBEBEB"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default UnLikeIcon;
