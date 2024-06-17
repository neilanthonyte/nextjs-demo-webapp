'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image';
import UserIcon from '@/app/assets/profile.png';
import AppLogo from '@/app/assets/logo.png';
import dynamic from 'next/dynamic';
import {useNavBarHooks} from "./navbar.hooks";

interface NavBarSample1Props {
    menu?: Array<string>,
    menuStyle?: "simple" | "boxed",
    mobileMenuStyle?: "dropdown" | "drawer"
}

const SimpleMenu = dynamic(() => import("../menu-simple"));
const PopUpMenu = dynamic(() => import("../drop-down"));
const DrawerMenu = dynamic(() => import("../drawer"));

const NavBarSample1 = ({menu = [], menuStyle = "simple", mobileMenuStyle = "drawer"}: NavBarSample1Props) => {
    const MENU: Array<string> = menu.length > 0 ? menu : ["Home"];
    const {showMobileMenu, setShowMobileMenu} = useNavBarHooks();

    return (
        <>
            {/** NAV BAR CONTAINER */}
            <div className="flex w-full h-12 flex-row md:px-6 z-20">
                {/** MOBILE MENU DROP DOWN CONTAINER */}
                <div className="flex h-12 w-auto justify-center items-center">
                    {/** HIDE IF SCREEN SIZE IS DESKTOP BUT SHOW ON MOBILE */}
                    <div className="p-2 block md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <HamburgerIcon boxSize={6} />
                    </div>
                </div>

                {/** APP LOGO */}
                <div className="flex h-12 w-full md:w-28 justify-center items-center">
                    <Image
                        src={AppLogo}
                        width={100}
                        height={100}
                        style={{objectFit: "contain"}}
                        alt='logo'
                    />
                </div>

                {/** HEADER CENTER CONTAINER */}
                <div className="flex flex-1 flex-row justify-center items-center">
                    {/** SIMPLE MENU */}
                    {
                        menuStyle === 'simple' ? (
                            <SimpleMenu {...{menu: MENU}} />
                        ) : null
                    }
                </div>

                {/** RIGHT CONTAINER */}
                <div className="flex h-12 w-12 mr-2 items-center justify-end md:w-28 md:mr-0">
                    <div className="flex h-10 w-10 rounded-full bg-slate-300 justify-center items-center">
                        <Image
                            src={UserIcon}
                            width={100}
                            height={100}
                            style={{objectFit: "contain"}}
                            alt='logo'
                        />
                    </div>
                </div>
            </div>

            {/** DROP DOWN */}
            {showMobileMenu ? mobileMenuStyle === "dropdown" ? (<PopUpMenu {...{menu: MENU}} />) : (<DrawerMenu {...{menu: MENU}} />) : null}
        </>
    )
}

export default NavBarSample1;