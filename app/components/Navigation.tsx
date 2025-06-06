"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { motion } from "framer-motion";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";

const links = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: '/#about',
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/visual-feed",
    title: "Visual Feed",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="hidden shrink-0 text-primary md:block">
          Fanindra
        </Link>

        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={handleClick}
              className={`${
                pathname === link.path ? "text-primary" : "text-secondary"
              } relative rounded-lg px-3 py-1.5 text-sm transition-colors`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {pathname === link.path && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-10 rounded-lg bg-tertiary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex h-8 w-8 items-center justify-center">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
