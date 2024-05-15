import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import logo from "../../../assets/Logo/icon_logo-B9EY-gHI.svg";
import Search from './Search';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

function Navbar() {
    const cartsData = useSelector(state => state.productInfo.carts);
    return (
        <div className="w-full p-3 flex items-center bg-sky-200">
            <div className="flex flex-1 items-center">
                <Link to="/">
                    <img className='hidden lg:block' src={logo} alt="" srcSet="" /></Link>
                <Search />
            </div>


            <div className="lg:max-w-[40%] flex justify-center justify-around space-x-3 lg:space-x-7">
                {/* Favorite */}
                <div>
                    <Badge badgeContent={0} color="success">
                        <ShoppingCartRoundedIcon />
                    </Badge >
                    <p className='text-xs'>wishlist</p>
                </div>

                {/* Cart */}
                <div>
                    <Link to="/cart">
                        <Badge badgeContent={cartsData?.length || 0} color="success">
                            <FavoriteBorderIcon />
                        </Badge>
                    </Link>
                    <p className='text-xs'>cart</p>
                </div>

                {/* User Profile */}
                <div className="w-full cursor-pointer">
                    <img className='w-11 h-11 rounded-full' alt="User Profile" src="https://i.ibb.co/bgDsSv8/Rangon-407.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
