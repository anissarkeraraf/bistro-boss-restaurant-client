import { Link } from "react-router-dom";


const NavBer = () => {

    const navList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/manu'>Our Manu</Link></li>
        <li><Link to='/order'>Order Foods</Link></li>
    </>

    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-20 bg-black text-[#FFFFFF] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <a className="btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-[#1f2937] px-3 py-2 rounded text-yellow-500">Button</button>
                </div>
            </div>
        </>
    );
};

export default NavBer;