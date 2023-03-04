type Props = {
  className?: string;
  onClick?: () => void;
};

function HamburgerIcon({ className, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-10 h-10 text-primary cursor-pointer hover:scale-105 hover:text-primary-focus duration-100 ease-linear ${className}`}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
    </svg>
  );
}

export default HamburgerIcon;
