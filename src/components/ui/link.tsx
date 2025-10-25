interface LinkProps {
  children: React.ReactNode;
  className?: string;
  url: string;
  ariaLabel?: string;
}

function Link({ className, children, url, ariaLabel }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      role="link"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={
        "p-1 cursor-pointer rounded-md transition-colors " + (className ?? "")
      }
    >
      {children}
    </a>
  );
}

export default Link;
