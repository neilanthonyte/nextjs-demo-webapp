import dynamic from 'next/dynamic';

const NavBarUIC = dynamic(() => import("../../components/NavBars"));

const NavBarPage = () => {
    return (
        <div className="mt-8">
            <div className="ml-4">Nav Bar Simple</div>
            <div className="shadow mt-2 border-t border-b border-slate-200">
                <NavBarUIC {...{menu: ["HOME", "WEB APPS", "COMPONENTS", "CONTACT US"]}} />
            </div>
        </div>
    )
}

export default NavBarPage;