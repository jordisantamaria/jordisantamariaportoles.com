import * as React from "react";
import { SVGProps } from "react";
const SvgGit = (props: SVGProps<SVGSVGElement>) => (
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
        fill="#F34F29"
        d="M46.776 21.892 26.108 1.224a3.05 3.05 0 0 0-4.311 0l-4.292 4.292 5.444 5.444a3.62 3.62 0 0 1 4.585 4.616l5.247 5.247a3.625 3.625 0 0 1 2.57 6.777 3.627 3.627 0 0 1-4.743-4.732l-4.893-4.893v12.878c.355.175.679.406.96.685a3.629 3.629 0 1 1-3.943-.791V17.75a3.627 3.627 0 0 1-1.969-4.758l-5.367-5.367L1.224 21.796a3.05 3.05 0 0 0 0 4.313l20.669 20.667a3.05 3.05 0 0 0 4.312 0l20.572-20.571a3.05 3.05 0 0 0 0-4.313Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGit;
