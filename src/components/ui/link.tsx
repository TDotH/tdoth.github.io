interface LinkProps {
  children: React.ReactNode;
  className?: string;
  url: string;
}

function Link({ className, children, url }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={
        "p-1 cursor-pointer hover:bg-zinc-700/50 active:bg-zinc-800/80 text-white rounded-md transition-colors " +
        (className ?? "")
      }
    >
      {children}
    </a>
  );
}

export default Link;
