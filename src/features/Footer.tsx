interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={
        "w-full p-4 bg-[url('/src/assets/ocean2.gif')] opacity-80 text-center text-sm text-background backdrop-blur-md " +
        (className ?? "")
      }
    >
      <p>© {new Date().getFullYear()} Tyde. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
