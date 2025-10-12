import type React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={
        "flex px-2 py-1 text-base font-semibold rounded-full text-white items-center " +
        (className ?? " bg-gray-500")
      }
      role="badge"
      aria-label="badge"
      title="badge"
    >
      {icon && <span className="mr-1 flex items-center ">{icon}</span>}
      <div className="mr-1">{children}</div>
    </span>
  );
}

export default Badge;
