type Props = {
  className?: string;
  onClick?: () => void;
};

function XMark({ className, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-10 h-10 text-accent cursor-pointer hover:scale-105 hover:text-accent-focus duration-100 ease-linear ${className}`}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default XMark;
