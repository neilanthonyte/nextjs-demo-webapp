'use client'

import dynamic from 'next/dynamic';
import Menu from "./components/AppNavBar/menu.json";

const NavBarUIC = dynamic(() => import("./components/NavBars/SampleNavBar1"));
const AppNavBar = dynamic(() => import("./components/AppNavBar"));
const HomePage = dynamic(() => import("./tabpages/home"));
const NavBarPage = dynamic(() => import("./tabpages/navbars"));
const SlidesPage = dynamic(() => import("./tabpages/slideshows"));

export default function Home() {
  const MENU: Array<string> = ["Home", "About", "Contact Us"];

  return (
    <main className="flex min-h-screen flex-col">
      <AppNavBar {...{menu: Menu.menu}}>
        {(selectedMenu: string) => {
          if(selectedMenu === 'navbars') {
            return (
              <NavBarPage />
            )
          }

          if(selectedMenu === 'slides') {
            return (
              <SlidesPage />
            )
          }

          return (
            <HomePage />
          )
        }}
      </AppNavBar>
    </main>
  );
}
