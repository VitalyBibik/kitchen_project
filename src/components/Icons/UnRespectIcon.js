import * as React from 'react';

function UnRespectIcon(props) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 1h2.67A2.31 2.31 0 0121 3v7a2.31 2.31 0 01-2.33 2H16m-7 2v4a3 3 0 003 3l4-9V1H4.72a2 2 0 00-2 1.7l-1.38 9a2 2 0 002 2.3H9z"
        stroke="#EBEBEB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UnRespectIcon;
