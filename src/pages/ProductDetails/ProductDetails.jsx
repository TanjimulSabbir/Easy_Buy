import React, { useState } from "react";
import ReviewCounter from "../../utils/ReviewCounter";

export default function ProductDetails({ product }) {
    const {
        brand: { id: brandId, title: brandTitle },
        category: { cat, cat_slug, imd, imd_slug, sub, sub_slug },
        created_at,
        id,
        images,
        marked_price,
        new_arrival,
        num_reviews,
        rating,
        reviews,
        selling_price,
        short_desc,
        sku,
        slug,
        title,
        variants,
        vendor: { name: vendorName, shop_id: shopId, shop_logo: shopLogo, shop_type: shopType },
        warranty
    } = product;
    const [quantity, setQuantity] = useState(1);
    const [imagePath, setImagePath] = useState(images[0]);
    const [color, setColor] = useState(images[0].color)

    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
    };

    const handleImage = ({ imageId, color }) => {
        const matchedItem = images.find(item => item.index === imageId)
        if (matchedItem !== -1) {
            setImagePath(matchedItem)
            setColor(variants.find(item => item.image === imageId).color)
        }
    }

    console.log(imagePath, "from product details")
    return (
        <div className="flex items-center">
            <div className="flex items-center">
                <div className="w-[10%]">
                    {images.map(item => (<img key={item.index}
                        onClick={() => handleImage({ imageId: item.index })}
                        className={`cursor-pointer ${item.thumb === imagePath.thumb && "border border-green-500"}`}
                        src={`https://api.zonesparks.com${item.thumb}`} alt="" srcSet="" />))}
                </div>
                <div className="w-[90%]">
                    <img src={`https://api.zonesparks.com${imagePath.image}`} alt="" srcSet="" />
                </div>
            </div>
            <div>
                <div className="p-5 mt-auto">
                    <h5 className="tracking-tight text-black capitalize">{title}</h5>
                    <ReviewCounter reviewNum={num_reviews} />
                    <p className="flex items-center space-x-1 mt-1">
                        <span>৳{selling_price}</span>
                        {marked_price && <del>৳{marked_price}</del>}
                    </p>
                    <p>{short_desc}</p>
                    <h5>Choose Size</h5>
                    <p>{variants.map(item => item.size)}</p>

                    <h5>Choose Color: <span className="lobster-two-bold">{color}</span></h5>
                    <div className="flex space-x-2">
                        {variants.map((item, index) => (
                            <div key={index} title={item.color} className={`w-11 h-11 rounded-xl cursor-pointer ${item.image === imagePath.index && "ring-2 ring-emerald-600"}`} onMouseOver={() => handleImage({ imageId: item.image, color: item.color })} style={{ backgroundColor: item.color }}></div>
                        ))}
                    </div>

                    <h5>Choose Quantity</h5>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
