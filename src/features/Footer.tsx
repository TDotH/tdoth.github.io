interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={
        "w-full p-4 bg-primary-400 text-center text-sm text-primary-50 " +
        (className ?? "")
      }
    >
      <p>© {new Date().getFullYear()} Tyde. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
