import * as React from "react";

function BrandIcon(props) {
    return (
        <svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <path d="M2 25V23H0V13H2V11H12V13H14V23H12V25H2ZM4 23H10V13H4V23Z" fill="#FF0000"/>
                <path d="M18 25V23H16V21H20V23H26V19H18V17H16V13H18V11H28V13H30V15H26V13H20V17H28V19H30V23H28V25H18Z" fill="#FF0000"/>
                <path d="M36 25V23H34V21H32V15H34V13H36V11H46V13H38V15H36V21H38V23H42V19H40V17H46V25H36Z" fill="#FF0000"/>
            </g>
            <defs>
                <filter id="filter0_d" x="0" y="11" width="47" height="15" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                    <feOffset dx="1" dy="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
            </defs>
        </svg>

    );
}

export default BrandIcon;
