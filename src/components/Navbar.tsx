interface NavItemProps {
  active?: boolean;
  onClick: () => void;
  name: string;
  className?: string;
}

interface NavbarProps {
  items: NavItemProps[];
}

function Navbar({ items }: NavbarProps) {
  return (
    <div className="w-full sticky top-0 h-16 justify-center md:justify-end flex items-center gap-4 text-primary-50">
      <div className="flex h-full px-5 rounded-full text-lg sm:mr-[2%] md:mr-[5%] xl:mr-[10%]">
        {items.map((item, idx) => {
          return (
            <div
              className={
                `flex flex-col transition-transform translate-y-[-55px] hover:translate-y-[-20px] justify-end px-4 py-2 h-25 rounded-b-sm cursor-pointer ${
                  item.active ? "bg-primary-100" : ""
                }` + (item.className ? " " + item.className : "bg-primary-400")
              }
              onClick={item.onClick}
              key={idx}
            >
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
