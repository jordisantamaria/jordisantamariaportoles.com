import * as React from "react";
import { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#0ACF83"
        d="M17.063 48.375a8.05 8.05 0 0 0 8.062-8.063V32.25h-8.063A8.05 8.05 0 0 0 9 40.313a8.05 8.05 0 0 0 8.063 8.062Z"
      />
      <path
        fill="#A259FF"
        d="M9 24.188a8.05 8.05 0 0 1 8.063-8.063h8.062V32.25h-8.063A8.05 8.05 0 0 1 9 24.187Z"
      />
      <path
        fill="#F24E1E"
        d="M9 8.063A8.05 8.05 0 0 1 17.063 0h8.062v16.125h-8.063A8.05 8.05 0 0 1 9 8.062Z"
      />
      <path
        fill="#FF7262"
        d="M25.125 0h8.063a8.05 8.05 0 0 1 8.062 8.063 8.05 8.05 0 0 1-8.063 8.062h-8.062V0Z"
      />
      <path
        fill="#1ABCFE"
        d="M41.25 24.188a8.05 8.05 0 0 1-8.063 8.062 8.05 8.05 0 0 1-8.062-8.063 8.05 8.05 0 0 1 8.063-8.062 8.05 8.05 0 0 1 8.062 8.063Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFigma;
