import Link from "next/link";
import { Button } from "@/components/ui/button";
import Search from "./Search";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "All Posts", href: "/posts" },
  { name: "Openings", href: "/posts?cat=openings" },
  { name: "Middle Game", href: "/posts?cat=middle-game" },
  { name: "Endgame", href: "/posts?cat=endgame" },
  { name: "Tactics", href: "/posts?cat=tactics" },
];

const MainCategories = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-card text-card-foreground rounded-2xl xl:rounded-full p-4 shadow-lg flex items-center justify-between w-full max-w-5xl mx-auto">
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap items-center gap-4">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            asChild
            className="text-primary hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Link href={category.href}>{category.name}</Link>
          </Button>
        ))}
      </div>

      {/* Divider */}
      <span className="hidden md:block text-muted-foreground">|</span>

      {/* Search Bar */}
      <div className="hidden md:block">
        <Search />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg text-primary hover:bg-accent hover:text-accent-foreground transition-all"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-card shadow-lg rounded-lg p-4 flex flex-col gap-3 md:hidden">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="ghost"
              asChild
              className="text-primary hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Link href={category.href} onClick={() => setMobileMenuOpen(false)}>
                {category.name}
              </Link>
            </Button>
          ))}
          <Search />
        </div>
      )}
    </div>
  );
};

export default MainCategories;
