interface DropDownCompProps {
    menu?: Array<string>
}

const DropDownComp = ({menu = []}: DropDownCompProps) => {
    return (
        <>
            <div className="absolute z-10 w-screen md:hidden">
                {
                    menu.map((item) => (
                        <div 
                            key={`drop-down-menu-${item}`} 
                            className="flex w-screen h-10 border-y items-center px-4 cursor-pointer">
                                {item}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default DropDownComp;