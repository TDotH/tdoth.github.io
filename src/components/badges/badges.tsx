import TailwindIcon from "../icons/tailwindIcon";
import ReactIcon from "../icons/reactIcon";
import Badge from "../ui/badge";

/**
 * ReactBadge
 * - Uses the project's BaseBadge component as a wrapper.
 * - Shows a small React logo and optional version text.
 */
export function ReactBadge() {
  return (
    <Badge
      className="bg-[#23272f] opacity-80"
      icon={<ReactIcon className="h-[20px]" />}
    >
      React
    </Badge>
  );
}

export function TailwindBadge() {
  return (
    <Badge
      className="bg-[#030712] opacity-80"
      icon={<TailwindIcon className="h-[20px]" />}
    >
      Tailwind
    </Badge>
  );
}
