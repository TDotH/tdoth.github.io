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
        "p-1 cursor-pointer rounded-md transition-colors " + (className ?? "")
      }
    >
      {children}
    </a>
  );
}

export default Link;
