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
        "flex px-2 py-1 font-semibold rounded-lg items-center " +
        (className ?? " bg-background text-foreground")
      }
      aria-label="badge"
      title="badge"
    >
      {icon && <span className="mr-1 flex items-center ">{icon}</span>}
      <div className="mr-1">{children}</div>
    </span>
  );
}

export default Badge;
