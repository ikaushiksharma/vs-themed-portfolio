'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import MobileNav from './MobileNav';

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <header className="w-full text-menu-text font-fira_retina">
      <nav className="w-full hidden lg:flex items-center justify-between border-b border-gray-theme h-11 text-[13px]">
        <div className="flex h-full items-center justify-center">
          <Link
            className="h-full hover:text-white hover:bg-gray-theme/50 flex items-center px-6 min-w-[275px] max-w-[275px]"
            href="/"
          >
            kaushik-sharma
          </Link>
          <Link
            className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            href="/"
          >
            _hello
          </Link>
          <Link
            className={`nav-link ${pathname === '/about-me' ? 'active' : ''}`}
            href="/about-me"
          >
            _about-me
          </Link>
          <Link
            className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}
            href="/projects"
          >
            _projects
          </Link>
        </div>
        <Link
          className={`nav-link-contact ${
            pathname === '/contact-me' ? 'active' : ''
          }`}
          href="/contact-me"
        >
          _contact-me
        </Link>
      </nav>
      <MobileNav path={pathname || '/'} />
    </header>
  );
};

export default Navbar;
