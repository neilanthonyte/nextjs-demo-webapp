import dynamic from 'next/dynamic';

const NavBarUIC1 = dynamic(() => import("../../components/NavBars/SampleNavBar1"));
const NavBarUIC2 = dynamic(() => import("../../components/NavBars/SampleNavBar2"));

const NavBarPage = () => {
    return (
        <>
            <div className="mt-8">
                <div className="ml-4">Sample Nav Bar 1</div>
                <div className="shadow mt-2 border-t border-b border-slate-200">
                    <NavBarUIC1 {...{menu: ["HOME", "WEB APPS", "COMPONENTS", "CONTACT US"]}} />
                </div>
            </div>
            <div className="mt-8">
                <div className="ml-4">Sample Nav Bar 2</div>
                <div className="shadow mt-2 border-t border-b border-slate-200">
                    <NavBarUIC2 {...{menu: ["HOME", "WEB APPS", "COMPONENTS", "CONTACT US"]}} />
                </div>
            </div>
        </>
    )
}

export default NavBarPage;