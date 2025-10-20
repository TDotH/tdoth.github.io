interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={
        "p-1 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition " +
        (className ?? "")
      }
    >
      {children}
    </button>
  );
}

export default Button;
