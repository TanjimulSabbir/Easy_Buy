import { GrFavorite } from 'react-icons/gr';
import { BsCart3 } from 'react-icons/bs';
import logo from "../../../assets/Logo/icon_logo-B9EY-gHI.svg";
import Search from './Search';

function Navbar() {
    return (
        <div className="w-full p-3 flex items-center bg-sky-200">
            <div className="flex flex-1 items-center">
                <img className='hidden md:block' src={logo} alt="" srcSet="" />
                <Search />
            </div>

            <div className="md:max-w-[40%] flex justify-center justify-around space-x-3 md:space-x-7">
                {/* Favorite */}
                <div>
                    <div className="indicator cursor-pointer">
                        <GrFavorite className='text-xg md:text-3xl font-thin' />
                        <div className="absolute inline-flex items-center justify-center w-3 h-3 md:w-6 md:h-6 text-xs font-bold text-white bg-blue-500 rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
                    </div>
                    <p className='text-xs'>wishlist</p>
                </div>
                
                {/* Cart */}
                <div>
                    <div className="indicator cursor-pointer -mt-3 md:-mt-0">
                        <BsCart3 className='text-xl md:text-2xl font-thin' />
                        <div className="absolute inline-flex items-center justify-center w-3 h-3 md:w-6 md:h-6 text-xs font-bold text-white bg-blue-500 rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
                    </div>
                    <p className='text-xs'>cart</p>
                </div>
                
                {/* User Profile */}
                <div className="w-full cursor-pointer">
                    <img className='w-11 h-11 rounded-full' alt="User Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
