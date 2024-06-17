interface DrawerCompProps {
    menu?: Array<string>
}

const DrawerComp = ({menu = []}: DrawerCompProps) => {
    return (
        <>
            <div className="absolute z-10 w-full h-full backdrop-opacity-5 bg-black-opacity-0.75 md:hidden overflow-hidden">
                <div className="h-full w-9/12 bg-white">
                {
                    menu.map((item) => (
                        <div 
                            key={`drawer-menu-${item}`} 
                            className="flex w-full h-10 border-y items-center px-4 cursor-pointer">
                                {item}
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default DrawerComp;