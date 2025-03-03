"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import {
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaArrowRightLong,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/service", label: "SERVICES" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/blog", label: "BLOG" },
    { href: "/contactus", label: "CONTACT US" },
  ];

  return (
    <header className="w-full fixed z-50 top-0">
      <div className="sm:flex bg-gradient-to-r bg-white text-black text-sm py-8 lg:px-[90px] flex md:flex-row sm:flex-col max-sm:flex-col justify-center lg:gap-80 items-center">
        <div>
          <div className="flex flex-col items-start gap-3 space-x-4">
            <a href="" target="_blank" className="flex items-center gap-2">
              <FaPhoneAlt size={16} fill="#ff9c00" />
              <span>Call at: +1-92-456-7890</span>
            </a>
            <a href="" target="_blank" className="flex items-center gap-2">
              <MdOutlineMail size={16} fill="#ff9c00" />
              <span>Mail at: info@pizzakitchen.com</span>
            </a>
          </div>
        </div>
        <div>
          <Link href={"/"} className="flex justify-center items-center">
            <Image
              src="/home/logo.png"
              alt="Logo"
              className="p-1"
              width={75}
              height={50}
            />
          </Link>
        </div>
        <div>
          <div className="flex flex-row justify-center items-center space-x-3">
            <a href="#" target="_blank" className="cursor-pointer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" className="cursor-pointer">
              <FaXTwitter />
            </a>
            <a href="#" target="_blank" className="cursor-pointer">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="cursor-pointer">
              <FaLinkedin />
            </a>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Order online
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white px-[10px] md:px-[55px] py-[10px] flex justify-center items-center shadow-lg h-[62px]">
        {/* Logo */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-font12 hover:text-red-800 ${
                pathname === href ? "text-[#e41e26]" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Quote Button - Visible on Desktop */}
        {/* <Link
          href={"/contact"}
          className="hidden md:flex justify-center items-center gap-3 bg-logored text-font12 text-white py-[8px] px-[13px] bg-black"
        >
          CONTACT US <FaArrowRightLong />
        </Link> */}

            <h3 className="md:hidden sm:block max-sm:block">Pizza Kitchen</h3>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`
          md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col py-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-font12 text-black text-center py-3 px-8 transition-colors ${
                pathname === href
                  ? "text-[#e41e26] "
                  : " hover:text-[#e41e26] hover:bg-gray-50 active:bg-gray-100"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        
        </nav>
      </div>
    </header>
  );
};

export default Header;
