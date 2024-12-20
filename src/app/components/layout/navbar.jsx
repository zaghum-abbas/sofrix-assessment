"use client";

import { useState } from "react";
import Image from "next/image";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="container flex justify-between items-center py-2 relative">
        {/* Logo */}
        <div className="sm:flex lg:max-w-[258px] md:max-w-[200px] max-w-[170px] hidden">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={258}
            height={52}
          />
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-[34px] text-primary font-bold text-xl`}
        >
          <li>App</li>
          <li>Security</li>
          <li>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden  flex justify-end w-full"
          onClick={toggleMenu}
        >
          <Image
            src="/assets/images/Menu.svg"
            alt="Menu"
            width={26}
            height={20}
          />
        </div>
      </nav>

      <div className="md:hidden flex justify-center mt-1">
        <Image
          src="/assets/images/SmallLogo.svg"
          alt="logo"
          width={113}
          height={60}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-10 left-0 w-full flex flex-col items-center gap-4 text-primary font-bold md:text-xl text-base bg-white shadow-md py-4">
          <li onClick={toggleMenu}>App</li>
          <li onClick={toggleMenu}>Security</li>
          <li onClick={toggleMenu}>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
