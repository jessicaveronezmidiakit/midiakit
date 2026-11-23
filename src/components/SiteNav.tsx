import { navLinks } from "@/content/midia-kit";

export function SiteNav() {
  return (
    <nav>
      <div className="wrap">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
