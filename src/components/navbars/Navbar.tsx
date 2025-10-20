export interface NavItemProps {
  active?: boolean;
  onClick: () => void;
  name: string;
  className?: string;
}

interface NavbarProps {
  items: NavItemProps[];
  isScrollPressed?: boolean;
  currentSection: string;
  hide?: boolean;
}

function Navbar({
  items,
  isScrollPressed,
  currentSection,
  hide = true,
}: NavbarProps) {
  return (
    <nav
      className={"flex h-full px-5 text-lg sm:mr-[2%] md:mr-[5%] xl:mr-[10%]"}
    >
      <ul className="flex">
        {items.map((item, idx) => {
          return (
            <li
              className={
                `flex flex-col md:transition-all duration-200 translate-y-[-55px] justify-end px-4 py-2 h-25 rounded-b-sm ${
                  currentSection === item.name
                    ? " cursor-default"
                    : " shadow-xl hover:translate-y-[-25px] cursor-pointer active:scale-90"
                }` + (item.className ? " " + item.className : "bg-primary-400")
              }
              onClick={!item.active ? item.onClick : undefined}
              key={idx}
            >
              <a>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
