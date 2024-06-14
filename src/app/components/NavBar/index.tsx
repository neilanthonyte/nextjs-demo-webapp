'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image';

interface NavBarUICProps {
    menu?: Array<string>
}

const NavBarUIC = ({menu = []}: NavBarUICProps) => {
    const MENU: Array<string> = menu.length > 0 ? menu : ["Home"];

    return (
        <>
            {/** NAV BAR CONTAINER */}
            <div className="flex w-full h-12 flex-row md:px-6">
                {/** MOBILE MENU DROP DOWN CONTAINER */}
                <div className="flex h-12 w-auto justify-center items-center">
                    {/** HIDE IF SCREEN SIZE IS DESKTOP BUT SHOW ON MOBILE */}
                    <div className="p-2 block md:hidden ">
                        <HamburgerIcon boxSize={6} />
                    </div>
                </div>

                {/** APP LOGO */}
                <div className="flex h-12 w-full md:w-28 justify-center items-center">
                    <Image
                        src="/logo.png"
                        width={100}
                        height={100}
                        style={{objectFit: "contain"}}
                        alt='logo'
                    />
                </div>

                {/** HEADER CENTER CONTAINER */}
                <div className="flex flex-1 flex-row justify-center items-center">
                    {/** SHOW IF SCREEN SIZE IS DESKTOP BUT HIDE ON MOBILE */}
                    <div className="hidden space-x-6 md:flex">
                        {MENU.map((item, index) => (<div key={`m-${index}`} className="">{item}</div>))}
                    </div>
                </div>

                {/** RIGHT CONTAINER */}
                <div className="h-12 w-12 md:w-28 bg-white"></div>
            </div>
        </>
    )
}

export default NavBarUIC;