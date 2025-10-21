export interface NavItemProps {
  active?: boolean;
  onClick: () => void;
  name: string;
  className?: string;
}

interface NavbarProps {
  items: string[];
  currentSection?: string;
}

function Navbar({ items, currentSection }: NavbarProps) {
  return (
    <nav
      className={"flex h-full px-5 text-lg sm:mr-[2%] md:mr-[5%] xl:mr-[10%]"}
    >
      <ul className="flex items-center">
        {items.map((item, idx) => {
          return (
            <li
              className={`flex flex-col md:transition-all duration-200 justify-end px-4 rounded-b-sm after:block after:origin-left after:scale-x-0 after:border-b-2 after:transition-all after:duration-350 after:ease-in-out hover:after:scale-x-100 hover:after:bg-foreground ${
                currentSection === item
                  ? " after:scale-x-100 after:bg-foreground font-bold cursor-default"
                  : "  cursor-pointer "
              }`}
              key={idx}
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
