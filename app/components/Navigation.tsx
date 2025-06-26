"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    path: "/",
    title: "Work",
  },
  {
    path: '/about',
    title: "About",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/#craft",
    title: "Craft",
  },
] as const;

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`;
  const router = useRouter();

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        // If we're already on the homepage, just scroll
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're on another page, navigate to homepage first
        router.push("/");
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, [pathname, router]);

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[900px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="hidden shrink-0 md:block">
          <p className="font-semibold text-primary text-xl">FM</p>
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
      </nav>
    </header>
  );
}
