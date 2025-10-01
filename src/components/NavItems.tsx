"use client";
import { NAV_ITEMS } from "@/lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavItems() {
  const pathname = usePathname();
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map((item) => (
        <li key={item.title}>
          <Link
            className={`hover:text-green-700 transition-colors ${
              isActive(item.href) ? "text-green-700" : ""
            }`}
            href={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
