import * as React from "react";
import { SVGProps } from "react";
const SvgCypress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={48}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#000"
          d="M24 0c13.266 0 24 10.735 24 24 0 13.266-10.734 24-24 24C10.735 48 0 37.266 0 24 0 10.735 10.735 0 24 0Z"
        />
      </mask>
      <g mask="url(#b)">
        <g filter="url(#c)">
          <path
            fill="#000"
            d="M24 .563C36.955.563 47.438 11.044 47.438 24c0 12.955-10.483 23.438-23.438 23.438C11.046 47.438.562 36.954.562 24 .563 11.046 11.046.562 24 .562Z"
          />
        </g>
        <path
          fill="#fff"
          d="M24 .563C36.955.563 47.438 11.044 47.438 24c0 12.955-10.483 23.438-23.438 23.438C11.046 47.438.562 36.954.562 24 .563 11.046 11.046.562 24 .562Z"
        />
      </g>
      <mask
        id="d"
        width={48}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#5C5C5E"
          d="M24 0c13.266 0 24 10.735 24 24 0 13.266-10.734 24-24 24C10.735 48 0 37.266 0 24 0 10.735 10.735 0 24 0Z"
        />
      </mask>
      <g mask="url(#d)">
        <path
          fill="#5C5C5E"
          d="M24 1.385C36.5 1.385 46.615 11.5 46.615 24 46.615 36.5 36.5 46.615 24 46.615 11.5 46.615 1.385 36.5 1.385 24 1.385 11.5 11.5 1.385 24 1.385Z"
        />
      </g>
      <mask
        id="e"
        width={48}
        height={48}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#fff"
          d="M24 0c13.266 0 24 10.735 24 24 0 13.266-10.734 24-24 24C10.735 48 0 37.266 0 24 0 10.735 10.735 0 24 0Z"
        />
      </mask>
      <g mask="url(#e)">
        <path
          fill="#fff"
          d="M36.007 33.95c-.823 2.55-2.056 4.441-3.783 5.84-1.727 1.397-4.03 2.138-6.908 2.384l-.576-3.783c1.892-.246 3.29-.657 4.194-1.315.33-.247.987-.987.987-.987l-6.826-21.875h5.675l3.947 16.365 4.194-16.365h5.51L36.007 33.95Zm-19.82-20.476c1.316 0 2.55.164 3.537.575 1.069.412 2.056.987 3.042 1.81l-2.302 3.124a9.022 9.022 0 0 0-1.892-1.069c-.575-.246-1.315-.329-1.973-.329-2.796 0-4.194 2.139-4.194 6.497 0 2.22.329 3.783 1.069 4.688.74.986 1.727 1.398 3.125 1.398.658 0 1.316-.082 1.891-.33a16.86 16.86 0 0 0 2.056-1.068l2.303 3.29c-1.892 1.562-4.03 2.302-6.497 2.302-1.974 0-3.618-.411-5.099-1.234a8.277 8.277 0 0 1-3.29-3.618c-.74-1.563-1.15-3.372-1.15-5.51 0-2.056.41-3.947 1.15-5.51.741-1.645 1.892-2.878 3.29-3.783a10.431 10.431 0 0 1 4.934-1.233Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
      <filter
        id="c"
        width={54.875}
        height={54.875}
        x={-3.438}
        y={-3.438}
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
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_127_47299"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_127_47299"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgCypress;
