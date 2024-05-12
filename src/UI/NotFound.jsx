import { Link } from 'react-router-dom';
import notFound from "../assets/svg/undraw_shopping_app_flsj.svg";

export default function NotFound() {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img className="h-screen" src={notFound} alt="Not Found" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-indigo-800 bg-indigo-700 bg-opacity-50">
                <div>
                    <h1 className="text-4xl font-semibold mb-4">Oops!</h1>
                    <p className="text-lg">The page you are looking for could not be found.</p>
                    <p className="text-sm mt-2">Please check the URL or go back to the <Link className='lobster-two-bold text-3xl text-indigo-800 cursor-pointer font-extrabold' to="/">homepage</Link>.</p>
                </div>
            </div>
        </div>
    );
}
