import * as React from "react";
import { SVGProps } from "react";
const SvgPrisma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={58}
    fill="none"
    viewBox="0 0 48 58"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M47.205 44.133 27.265 2.238A3.176 3.176 0 0 0 26.154.965a3.224 3.224 0 0 0-1.614-.53 3.192 3.192 0 0 0-1.668.345 3.15 3.15 0 0 0-1.245 1.15L0 36.586a3.215 3.215 0 0 0 .036 3.479l10.574 16.2a3.4 3.4 0 0 0 1.676 1.323c.688.25 1.44.274 2.143.067l30.684-8.98A3.38 3.38 0 0 0 46.367 48a3.33 3.33 0 0 0 .858-1.13 3.225 3.225 0 0 0-.019-2.738l-.001.001ZM42.74 45.93l-26.037 7.618c-.794.233-1.557-.448-1.391-1.24l9.302-44.07c.174-.825 1.325-.955 1.689-.192l17.22 36.18a1.22 1.22 0 0 1-.315 1.453 1.248 1.248 0 0 1-.469.251h.002Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v58H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrisma;
