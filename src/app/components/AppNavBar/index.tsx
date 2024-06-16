'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image';
import {useTwoColNavBarHooks} from "./index.hooks";
import { ReactElement } from 'react';

type ItemProps = {
    id: string,
    label: string,
    route: string
}

interface TwoColNavBarProps {
    menu?: Array<ItemProps>
    menuStyle?: "default",
    children: Function
}

const TwoColNavBar = ({menu = [], menuStyle = "default", children}: TwoColNavBarProps) => {
    const {
        selectedMenu, setSelectedMenu,
        defaultStyle, selectedStyle
    } = useTwoColNavBarHooks();

    return (
        <>
            <div className="flex w-full h-12 flex-row">
                {menu.map((item) => (
                    <div 
                        key={`item-${item.id}`}
                        className={selectedMenu === item.id ? selectedStyle : defaultStyle}
                        onClick={() => setSelectedMenu(item.id)}>
                        {item.label}
                    </div>
                ))}
            </div>
            {children(selectedMenu)}
        </>
    )
}

export default TwoColNavBar;