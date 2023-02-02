import * as React from "react";
import { SVGProps } from "react";
const SvgHtml5 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#E44D26"
      d="M7.139 42.703 3.387.623h41.226l-3.756 42.074-16.882 4.68-16.836-4.674Z"
    />
    <path fill="#F16529" d="m24 43.8 13.642-3.782 3.21-35.955H24V43.8Z" />
    <path
      fill="#EBEBEB"
      d="M24 19.67h-6.83l-.471-5.285H24v-5.16H11.058l.124 1.384 1.268 14.223H24V19.67Zm0 13.404-.023.007-5.747-1.553-.368-4.115h-5.181l.723 8.103 10.572 2.935.024-.007v-5.37Z"
    />
    <path
      fill="#fff"
      d="M23.982 19.67v5.162h6.355l-.599 6.693-5.756 1.554v5.37l10.58-2.933.078-.872 1.213-13.587.126-1.386H23.982Zm0-10.445v5.16h12.467l.103-1.16.236-2.616.123-1.384H23.982Z"
    />
  </svg>
);
export default SvgHtml5;
