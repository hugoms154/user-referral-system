export function ArrowLeft({ color = '#1E1A34' }: {color?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M15.833 10H4.167m0 0L10 15.833M4.167 10L10 4.167"
      ></path>
    </svg>
  );
}