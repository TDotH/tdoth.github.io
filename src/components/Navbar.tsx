interface NavItemProps {
  active?: boolean;
  onClick: () => void;
  name: string;
}

interface NavbarProps {
  items: NavItemProps[];
}

function Navbar({ items }: NavbarProps) {
  return (
    <div className="w-full h-16 justify-center flex items-center gap-4">
      <div className="flex gap-4 px-5 py-3 rounded-full text-lg backdrop-blur-md bg-white/10">
        {items.map((item, idx) => {
          return (
            <div onClick={item.onClick} key={idx}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
