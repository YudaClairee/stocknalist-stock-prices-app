import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import UserDropdown from "./UserDropdown";

function Header() {
  return (
    <header className="header sticky top-0">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src="/assets/images/logotype-stocknalist.png"
            alt="Stocknalist"
            width={140}
            height={32}
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown />
      </div>
    </header>
  );
}

export default Header;
