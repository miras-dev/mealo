"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export function Navbar5() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return (
    <section
      className="relative flex w-full items-center justify-between border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex lg:flex-1 lg:items-center">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href="/" className="flex items-center">
              <Image
                src="/images/CompanyMainLogo.svg"
                alt="Mealo Logo"
                width={150}
                height={40}
                className="h-8 w-auto md:h-6 mt-2 me-5"
              />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={toggleMobileMenu}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: 8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={animateMobileMenu}
                variants={{
                  open: { width: 0, transition: { duration: 0.1 } },
                  closed: {
                    width: "1.5rem",
                    transition: { delay: 0.3, duration: 0.2 },
                  },
                }}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={animateMobileMenuButtonSpan}
                variants={{
                  open: { translateY: -8, transition: { delay: 0.1 } },
                  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
                  closed: {
                    translateY: 0,
                    rotate: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </button>
          </div>
          <motion.nav
            variants={{
              open: { height: "var(--height-open, 100dvh)" },
              close: { height: "var(--height-closed, 0)" },
            }}
            initial="close"
            exit="close"
            animate={animateMobileMenu}
            transition={{ duration: 0.4 }}
            className="overflow-hidden px-[5%] lg:ml-6 lg:flex lg:items-center lg:gap-6 lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            <a
              href="/plans"
              className="block py-3 text-md first:pt-7 lg:py-6 lg:text-base first:lg:pt-6 hover:text-gray-600 transition-colors"
            >
              Plans
            </a>
            <a
              href="/meals"
              className="block py-3 text-md lg:py-6 lg:text-base hover:text-gray-600 transition-colors"
            >
              Meal menu
            </a>
            <a
              href="/about-us"
              className="block py-3 text-md lg:py-6 lg:text-base hover:text-gray-600 transition-colors"
            >
              About us
            </a>
            <a
              href="/blogs"
              className="block py-3 text-md pb-7 lg:py-6 lg:pb-6 lg:text-base hover:text-gray-600 transition-colors"
            >
              Blog
            </a>
          </motion.nav>
        </div>
        <div className="hidden items-center gap-4 px-[5%] lg:flex lg:px-0">
          <button 
            className="button-secondary"
          variant="secondary">
            <a href="/contact">Contact</a>
          </button>
           <button className="w-full bg-black text-white hover:bg-gray-800 button-primary">
              Order now 
          </button>
        </div>
      </div>
    </section>
  );
}
