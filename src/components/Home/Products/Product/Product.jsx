import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Product({ product }) {
    const { id, brand: { slug: brandSlug, title: brandTitle }, category: { cat, cat_slug, sub, sub_slug, imd, imd_slug }, slug, title, images, marked_price, new_arrival, num_reviews, rating, selling_price, variants
    } = product;

    return (
        <div>

            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`product/${id}`}>
                    <img className="rounded-" src={`https://api.zonesparks.com${images[0].thumb}`} alt="" />
                </Link>
                <div className="p-5">
                    <Link to={`product/${id}`}>
                        <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </Link>
                    <p>
                    <IoStarOutline className="text-yellow-500 bg-blend-lighten"/>
                    </p>
                </div>
            </div>
        </div>
    )
}
