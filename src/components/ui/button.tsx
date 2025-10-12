interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className="p-1 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      {children}
    </button>
  );
}

export default Button;
