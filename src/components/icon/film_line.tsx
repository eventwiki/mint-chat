import type { IconProps } from "./types";

export const Film_line = ({
  size = 16,
  className,
  style,
  onClick,
}: IconProps) => (
  <svg
    className={className}
    style={style}
    width={size}
    height={size}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g fill="none">
      <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
      <path
        fill="currentColor"
        d="M20 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16Zm-4 2H8v14h8V5Zm4 12h-2v2h2v-2ZM6 17H4v2h2v-2Zm14-4h-2v2h2v-2ZM6 13H4v2h2v-2Zm14-4h-2v2h2V9ZM6 9H4v2h2V9Zm14-4h-2v2h2V5ZM6 5H4v2h2V5Z"
      />
    </g>
  </svg>
);