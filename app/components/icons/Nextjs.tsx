import * as React from "react";
import { SVGProps } from "react";
const SvgNextjs = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#fff"
        d="M24 0C10.762 0 0 10.762 0 24c0 13.237 10.762 24 24 24 4.2 0 8.138-1.087 11.55-2.962l-17.4-24.3v13.724H15.6V15.675h2.55L37.088 44.1C43.65 39.825 48 32.437 48 24 48 10.762 37.237 0 24 0Zm8.288 31.725-2.813-4.238V15.676h2.813v16.05Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNextjs;
