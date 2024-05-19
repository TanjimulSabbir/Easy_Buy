/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import GetQuantity from "../../utils/GetQuantity";

export default function Cart({ cart }) {
    const { productId, title, selling_price, stock, imagePath: { id, product, image, thumb, index, variant_id }, color, size, quantity } = cart;

    const [Quantity, setQuantity] = useState(quantity)
    const handleQuantityChange = (amount) => {
        const newQuantity = Quantity + amount;

        if (newQuantity <= 0) {
            return;
        }

        if (stock > 0 && newQuantity > stock) {
            toast.error("Oops! Exceeds available stock.");
            return;
        }
        setQuantity(newQuantity);
    };
    // <img  alt="" width="auto" height="auto" 
    return (
        <div>
            <div className="flex shadow border border-slate-200 text-sm md:text-base">
                <div className="flex-grow max-w-28 md:max-w-52">
                    <img src={`https://api.zonesparks.com${thumb}`} alt="" className="w-full h-full" />
                </div>
                <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-baseline">
                        <h1 className="w-full flex-none mb-3 text-xl leading-none text-slate-900">
                            {title}
                        </h1>
                        <div className="flex items-center space-x-5">
                            <div className="flex-auto font-medium text-slate-800">
                                Price:  <span className="">৳{(selling_price * Quantity).toFixed(2)}</span>
                            </div>
                            <div className="flex-auto font-medium text-slate-800">
                                Size: <span className=""> {size}</span>
                            </div>
                            <div className="font-medium text-slate-800">
                                In stock: <span className=""> {stock}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-baseline mt-3 pb-6">
                        <GetQuantity quantity={Quantity} handleQuantityChange={handleQuantityChange} />
                    </div>
                    <div className="flex space-x-4 mb-3 text-sm font-medium">
                        <div className="flex-auto flex space-x-4 pr-4">
                            <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-[#0071e3] text-white" type="submit">
                                Buy now
                            </button>
                            <button className="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
                                Add to bag
                            </button>
                        </div>
                        <button className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-slate-500">
                        Free shipping on all Location in Rajshahi, Bangladesh orders.
                    </p>
                </div>
            </div>
        </div>
    )
}