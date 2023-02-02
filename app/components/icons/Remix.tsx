import * as React from "react";
import { SVGProps } from "react";
const SvgRemix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)" fill="#E8F2FF">
      <path
        fillRule="evenodd"
        d="M39.036 34.221c.34 4.373.34 6.422.34 8.659H29.261c0-.487.008-.933.017-1.385.027-1.405.056-2.87-.172-5.83-.3-4.332-2.166-5.294-5.596-5.294H7.6v-7.882h16.391c4.333 0 6.5-1.318 6.5-4.808 0-3.069-2.167-4.928-6.5-4.928H7.6V5.04h18.197c9.808 0 14.683 4.633 14.683 12.034 0 5.535-3.43 9.145-8.064 9.747 3.912.782 6.199 3.008 6.62 7.4Z"
        clipRule="evenodd"
      />
      <path d="M7.6 42.88v-5.876h10.696c1.786 0 2.174 1.325 2.174 2.116v3.76H7.6Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="b"
        width={203.547}
        height={208.507}
        x={-77.733}
        y={-80.293}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={37.333} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 1 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_126_46813"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={42.667} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 0.9 0" />
        <feBlend
          in2="effect1_dropShadow_126_46813"
          result="effect2_dropShadow_126_46813"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_126_46813"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgRemix;
