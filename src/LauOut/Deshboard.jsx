import { BiSolidCalendarStar } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { FaBook, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { RiFileList3Fill, RiSecurePaymentLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../componants/Hooks/useAdmin";


const Deshboard = () => {

    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu uppercase">
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaList />Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageBookings'><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers />All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaHome></FaHome>Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><RiSecurePaymentLine />Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/review'><BiSolidCalendarStar />Add Review</NavLink></li>
                                <li><NavLink to='/dashboard/bookings'><RiFileList3Fill />My Bookings</NavLink></li>
                            </>
                    }

                    {/* Shared navlink in this route */}
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/manu'><BsList></BsList>Menu</NavLink></li>
                    <li><NavLink to='/order/salads'><FaShop></FaShop>Shop</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope></FaEnvelope>Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;