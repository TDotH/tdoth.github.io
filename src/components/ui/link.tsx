interface ButtonProps {
  children: React.ReactNode;
}

function Link({ children }: ButtonProps) {
  return (
    <span className="p-2 cursor-pointer hover:bg-zinc-700/50 active:bg-zinc-800/80 text-white rounded-full transition-colors">
      {children}
    </span>
  );
}

export default Link;
