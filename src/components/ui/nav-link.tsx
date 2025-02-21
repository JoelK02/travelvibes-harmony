
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  active?: boolean;
}

export function NavLink({ 
  to,
  children,
  className,
  active = false,
  ...props
}: NavLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background hover:text-primary",
        active && "text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
