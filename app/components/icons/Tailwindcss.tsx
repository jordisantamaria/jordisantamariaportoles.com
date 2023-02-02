import * as React from "react";
import { SVGProps } from "react";
const SvgTailwindcss = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#38B2AC"
        d="M24.002 9.6c-6.4 0-10.4 3.2-12 9.6 2.399-3.2 5.2-4.399 8.399-3.6 1.826.456 3.132 1.78 4.577 3.248C27.331 21.236 30.054 24 36.001 24c6.4 0 10.4-3.199 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.825-.456-3.13-1.78-4.577-3.247C32.673 12.365 29.951 9.6 24.001 9.6Zm-12 14.4c-6.4 0-10.4 3.2-12 9.6C2.4 30.4 5.201 29.2 8.4 30c1.826.456 3.132 1.78 4.577 3.248 2.353 2.387 5.076 5.151 11.024 5.151 6.4 0 10.398-3.198 12-9.599-2.4 3.2-5.2 4.4-8.4 3.6-1.826-.456-3.13-1.78-4.578-3.248C20.673 26.764 17.951 24 12.001 24Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTailwindcss;
