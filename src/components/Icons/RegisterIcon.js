import * as React from "react";
import PropTypes from "prop-types";

function RegisterIcon({ stroke = '#EBEBEB', ...props }) {
  return (
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
           width={24} height={24} viewBox="0 0 64.000000 64.000000" strokeWidth={3}
           preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
          fill={stroke}>
          <path d="M202 609 c-107 -53 -133 -204 -57 -321 l25 -37 -45 -20 c-56 -25
-115 -69 -115 -87 0 -25 21 -25 51 1 61 51 89 60 189 62 52 1 104 3 115 4 11
2 39 0 61 -4 34 -6 43 -4 48 10 8 19 -9 33 -41 33 -13 0 -23 2 -23 4 0 2 12
25 26 51 37 66 44 165 16 221 -24 48 -46 69 -95 89 -51 21 -104 19 -155 -6z
m154 -35 c49 -23 74 -70 74 -138 0 -158 -128 -254 -224 -168 -58 53 -84 191
-47 250 42 67 125 90 197 56z"/>
          <path d="M518 178 c-3 -43 -3 -43 -45 -46 -35 -3 -43 -7 -43 -23 0 -16 7 -19
45 -19 l45 0 0 -40 c0 -33 3 -40 20 -40 17 0 20 7 20 40 l0 40 40 0 c33 0 40
3 40 20 0 17 -7 20 -39 20 -40 0 -40 0 -43 42 -2 31 -8 44 -20 46 -13 3 -17
-6 -20 -40z"/>
        </g>
      </svg>
  );
}

export default RegisterIcon;

RegisterIcon.propTypes = {
  stroke: PropTypes.string
}
