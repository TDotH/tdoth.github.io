export interface NavItemProps {
  active?: boolean;
  onClick: () => void;
  name: string;
  className?: string;
}

interface NavbarProps {
  items: NavItemProps[];
  isScrollPressed?: boolean;
}

function Navbar({ items, isScrollPressed }: NavbarProps) {
  return (
    <nav className="flex h-full px-5 rounded-full text-lg sm:mr-[2%] md:mr-[5%] xl:mr-[10%]">
      {items.map((item, idx) => {
        return (
          <div
            className={
              `flex flex-col md:transition-all duration-200 translate-y-[-55px] justify-end px-4 py-2 h-25 rounded-b-sm ${
                item.active
                  ? " cursor-default"
                  : " shadow-xl hover:translate-y-[-25px] cursor-pointer active:scale-90"
              }` + (item.className ? " " + item.className : "bg-primary-400")
            }
            onClick={!item.active ? item.onClick : undefined}
            key={idx}
          >
            <div>{item.name}</div>
          </div>
        );
      })}
    </nav>
  );
}

export default Navbar;
