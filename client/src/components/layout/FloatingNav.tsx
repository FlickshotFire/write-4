import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/thoughts", label: "Thoughts" },
    { href: "/learn", label: "Learn" },
    { href: "/about", label: "About" },
  ];
  
  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };
  
  return (
    <nav className="floating-nav fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-2xl" data-testid="floating-nav">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold gradient-text">
          Aman<span className="text-accent">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href) 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="mobile-menu-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl p-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors text-left py-2 ${
                  isActive(item.href) 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
                data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
