import {
  faGithubSquare,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../components/ui/link";
import { useIsMobile } from "../utils/useIsMobile";

interface FooterProps {
  className?: string;
  show?: boolean;
}

function Footer({ show }: FooterProps) {
  const isMobile = useIsMobile();
  return (
    <footer
      className={
        "w-full bg-background/20 sticky bottom-0 transition-translation duration-300 z-10 h-10 md:h-16 justify-between flex items-center gap-4 backdrop-blur-md " +
        (show ? " " : " translate-y-20")
      }
    >
      <div className="flex gap-2 ml-[5%] sm:ml-[10%]">
        <Link
          className="text-foreground hover:bg-foreground/20 active:bg-foreground/10 flex items-center"
          url={"https://github.com/TDotH"}
        >
          <FontAwesomeIcon
            className="transition-colors"
            size="2x"
            icon={faGithubSquare}
          />
        </Link>
        <Link
          className="text-foreground hover:bg-foreground/20 active:bg-foreground/10 flex items-center"
          url={"https://www.linkedin.com/in/tyde-hashimoto-665456156/"}
        >
          <FontAwesomeIcon
            className="transition-colors"
            size="2x"
            icon={faSquareLinkedin}
          />
        </Link>
      </div>
      <div className="mr-[5%] sm:mr-[10%]">
        <p className="text-sm sm:text-base">
          © 2025 Tyde{" "}
          {isMobile ? "Hashimoto" : "Hashimoto. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
