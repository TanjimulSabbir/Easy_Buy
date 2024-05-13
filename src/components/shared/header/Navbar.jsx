import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaRegHeart } from 'react-icons/fa';
import logo from "../../../assets/Logo/icon_logo-B9EY-gHI.svg"
import "../../../style/navbar.css"
import { FiSearch } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { GrFavorite } from 'react-icons/gr';
import Search from './Search';
import { RiMenu2Line } from 'react-icons/ri';
import CategoriesDropDown from '../../../utils/CategoriesDropDown';
import "../../../style/search.css"
import { IoMenuOutline } from 'react-icons/io5';

function Navbar() {
    const handleChoice = () => {
        // Implement functionality here
    };

    return (
        <div className="navbar bg-sky-200">
            <div className="flex items-center">
                <img src={logo} alt="" srcSet="" />
            </div>

            <div className='w-full'>
                <Search />
            </div>

            <div className="flex-1 flex items-center justify-end space-x-5">

                <div className="">
                    <div className="indicator cursor-pointer">
                        <GrFavorite className='w-7 h-7 font-thin' />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
                    </div>
                    <p className='text-xs'>wishlist</p>
                </div>
                <div>
                    <div className="indicator cursor-pointer">
                        <BsCart3 className='w-7 h-7 font-thin' />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
                    </div>
                    <p className='text-xs'>cart</p>
                </div>
                <div className="cursor-pointer">
                    <img className='w-11 h-11 rounded-full' alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
