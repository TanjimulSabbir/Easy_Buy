import { Link, useLocation } from "react-router-dom";
import ReviewCounter from "../../../../utils/ReviewCounter";
import "../../../../style/product.css"


/* eslint-disable react/prop-types */
export default function Product({ product }) {
    const { id, brand: { slug: brandSlug, title: brandTitle }, category: { cat, cat_slug, sub, sub_slug, imd, imd_slug }, slug, title, images, marked_price, new_arrival, num_reviews, rating, selling_price, variants
    } = product;

    const path = useLocation().pathname;
    return (
        <div className={`productCard flex flex-grow ${path !== "/" && "mx-3"}`}>
            <div className="w-full relative bg-white shadow rounded-lg border border-gray-200">
                <Link to={`/product/${id}`}>
                    <img className="w-full flex items-center justify-center border-b border-gray-300" src={`https://api.zonesparks.com${images[0].thumb}`} alt="" />
                </Link>
                <p className="text-xs opacity-50 text-center mt-1">{cat}</p>
                <div className="p-5 mt-auto">
                    <Link to={`/product/${id}`}>
                        <h5 className="tracking-tight text-black capitalize">{title}</h5>
                    </Link>
                    <ReviewCounter reviewNum={5} />
                    <p className="flex items-center space-x-1
                    mt-1">
                        <span>৳{selling_price}</span>
                        <del>{marked_price}</del>
                    </p>
                </div>
                <p className="absolute top-0 left-0 lobster-two-regular text-xs py-[2px] px-[6px] bg-[#025ab8] rounded-sm text-white">{new_arrival ? "New" : `Discount ${((marked_price - selling_price) * .1).toFixed(0)}%`}</p>
            </div>
        </div>
    )
}
