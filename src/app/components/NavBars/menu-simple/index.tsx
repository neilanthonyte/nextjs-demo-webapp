import {useSimpleMenuHooks} from "./index.hooks";
import { ChevronDownIcon } from '@chakra-ui/icons';

interface SimpleMenuProps {
    menu?: Array<string>,
    style?: "default" | "dropdown"
}

const MenuSimple = ({menu = [], style = "default"}: SimpleMenuProps) => {
    const {
        selectedMenu, setSelectedMenu,
        defaultStyle, selectedStyle
    } = useSimpleMenuHooks();
    const NoArrow = ["HOME", "CONTACT US"];

    if(style === "dropdown") {
        return (
            <div className="hidden space-x-6 md:flex justify-center items-center">
                {menu.map((item, index) => (
                    <div 
                        key={`m-${index}`} 
                        className={`flex h-12 justify-center items-center px-4 cursor-pointer text-white hover:bg-neutral-600 relative group`}
                        onClick={() => setSelectedMenu(item)}>
                            {item} {NoArrow.indexOf(item) < 0 ? (<ChevronDownIcon boxSize={6} color="#fff" />) : null}
                            {NoArrow.indexOf(item) < 0 ? (<div className={`absolute z-${10 + index} top-12 left-0 bg-neutral-600 w-44 hidden group-hover:block`}>
                                <div className="p-2">Menu 1</div>
                            </div>) : null}
                    </div>
                ))}
            </div>
        )
    }
    
    return (
        <div className="hidden space-x-6 md:flex justify-center items-center">
            {menu.map((item, index) => (
                <div 
                    key={`m-${index}`} 
                    className={selectedMenu === item ? selectedStyle : defaultStyle}
                    onClick={() => setSelectedMenu(item)}>
                        {item}
                </div>
            ))}
        </div>
    )
}

export default MenuSimple;