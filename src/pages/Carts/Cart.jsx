/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import GetQuantity from "../../utils/getQuantity";

export default function Cart({ cart }) {
    const { productId, title, selling_price, stock, imagePath: { id, product, image, thumb, index, variant_id }, color, size, quantity } = cart;

    const [Quantity, setQuantity] = useState(quantity)
    const handleQuantityChange = (amount) => {
        const newQuantity = quantity + amount;

        if (newQuantity <= 0) {
            return;
        }

        if (stock > 0 && newQuantity > stock) {
            toast.error("Oops! Exceeds available stock.");
            return;
        }

        setQuantity(newQuantity);
    };
    return (
        <article className="flex items-start space-x-6 p-6">
            <img src={`https://api.zonesparks.com${thumb}`} alt="" width="auto" height="auto" className="flex-none rounded-md bg-slate-100" />
            <div className="min-w-0 relative flex-auto">
                <h2 className="font-semibold text-slate-900 truncate pr-20">{title}</h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <dt className="text-sky-500">
                            <span className="sr-only">Price</span>
                        </dt>
                        <dd>{selling_price}</dd>
                    </div>
                    <div>
                        <dt className="sr-only">Size</dt>
                        <dd className="px-1.5 ring-1 ring-slate-200 rounded">{size}</dd>
                    </div>
                    <div className="ml-2">
                        <dt className="sr-only">Color</dt>
                        <dd>{color}</dd>
                    </div>

                    <div>
                        <dt className="sr-only">Stock</dt>
                        <dd className="flex items-center">
                            <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            {stock}
                        </dd>
                    </div>
                    <GetQuantity quantity={Quantity} handleQuantityChange={handleQuantityChange} />
                    <p className="text-slate-400">{selling_price}</p>
                </dl>
                
            </div>
        </article>
    )
}