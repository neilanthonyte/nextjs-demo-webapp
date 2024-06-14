'use client'

import dynamic from 'next/dynamic';

const NavBarUIC = dynamic(() => import("../app/components/NavBar"));

export default function Home() {
  const MENU: Array<string> = ["Home", "About", "Contact Us"];

  return (
    <main className="flex min-h-screen">
      <NavBarUIC />
    </main>
  );
}
