import {useSimpleMenuHooks} from "./index.hooks";

interface SimpleMenuProps {
    menu?: Array<string>
}

const MenuSimple = ({menu = []}: SimpleMenuProps) => {
    const {
        selectedMenu, setSelectedMenu,
        defaultStyle, selectedStyle
    } = useSimpleMenuHooks();
    
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