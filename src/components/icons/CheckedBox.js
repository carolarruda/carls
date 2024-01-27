const CheckedBox = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_303_22899)">
        <rect
          x="4"
          width="16"
          height="16"
          rx="4"
          fill="#B55D51"
          fill-opacity="0.972549"
        />
        <rect
          x="4.5"
          y="0.5"
          width="15"
          height="15"
          rx="3.5"
          stroke="#B55D51"
          stroke-opacity="0.972549"
        />
        <path
          d="M10.3667 12L6.56665 8.2L7.51665 7.25L10.3667 10.1L16.4833 3.98334L17.4333 4.93334L10.3667 12Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_303_22899"
          x="0"
          y="0"
          width="24"
          height="24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_303_22899"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_303_22899"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckedBox;
