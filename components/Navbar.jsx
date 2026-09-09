"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["The Experience", "#experience"],
  ["App Preview", "#app-preview"],
  ["How It Works", "#how-it-works"],
  ["Safety", "#safety"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (
        event.type === "pointerdown" &&
        !menuRef.current?.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", close);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="navigation wrap" aria-label="Main navigation">
        <a className="brand-logo-link" href="#top" aria-label="Lovydate home">
          <Image
            src="/assets/textmark_icon.png"
            alt="Lovydate"
            width={145}
            height={30}
            priority
            className="brand-logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="nav-actions">
          <a className="button button-small button-ink nav-cta" href="#waitlist">
            Get Early Access
          </a>

          {/* Mobile Hamburger Button */}
          <button
            ref={triggerRef}
            type="button"
            className="menu-toggle icon-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={open ? "mobile-menu" : undefined}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {open && (
          <div ref={menuRef} id="mobile-menu" className="mobile-menu">
            <div className="mobile-menu-links">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="mobile-link"
                >
                  <span>{label}</span>
                  <ArrowUpRight size={16} />
                </a>
              ))}
              <a
                href="#waitlist"
                className="button button-red mobile-cta"
                onClick={() => setOpen(false)}
              >
                Get Early Access
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
