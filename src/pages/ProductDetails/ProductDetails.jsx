import { useState } from "react";
import toast from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { PiShoppingBagOpenBold } from "react-icons/pi";

export default function ProductDetails({ product }) {
    const {
        variants,
        selling_price,
        marked_price,
        short_desc,
        title,
        images,
    } = product;

    const [quantity, setQuantity] = useState(1);
    const [imagePath, setImagePath] = useState(images[0]);
    const [stock, setStock] = useState(variants.find(item => item.image == imagePath.index)?.stock)
    const [selectedData, setSelectedData] = useState({
        color: "",
        size: "",
        quantity: 1,
    });

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
        setSelectedData((prevData) => ({ ...prevData, quantity: newQuantity }));
    };

    const handleImage = (imageId) => {
        const matchedItem = images.find((item) => item.index === imageId);
        if (matchedItem) {
            setImagePath(matchedItem);
        }
        const getStock = variants.find(item => item.image === imageId)
        if (getStock) setStock(getStock.stock)
    };

    const handleSizeSelect = (size) => {
        setSelectedData((prevData) => ({ ...prevData, size }));
    };

    const handleColorSelect = (color) => {
        setSelectedData((prevData) => ({ ...prevData, color }));
    };

    console.log(product); // Log selected size, color, and quantity
    const sizeStyle = "inline-block py-1 px-3 border border-dotted border-gray-500 text-black rounded-lg cursor-pointer font-bold"

    const filteredSizes = [...new Set(variants.filter(item => item.size))];
    const filteredColors = [...new Set(variants.filter(item => item.color))];

    // console.log(filteredSizes,filt)
    return (
        <div className="w-full flex flex-col lg:flex-row items-center gap-7 lg:items-start">
            {/* Image Gallery */}
            <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row items-cente gap-5">
                <div className="lg:w-[15%] mx-auto flex flex-row justify-center lg:flex-col gap-5">
                    {images.map((item) => (
                        <img
                            key={item.index}
                            onClick={() => handleImage(item.index)}
                            className={`w-[15%] lg:w-full cursor-pointer transition-opacity duration-150  ${item.thumb === imagePath.thumb ? "border border-green-500 opacity-100" : "opacity-70"} hover:opacity-100`}
                            src={`https://api.zonesparks.com${item.thumb}`}
                            alt=""
                        />
                    ))}
                </div>
                <div className="w-[80%] mx-auto">
                    <img src={`https://api.zonesparks.com${imagePath.image}`} alt="" />
                </div>
            </div>

            {/* Product Details */}
            <div className="w-full px-7 lg:px-0">
                <div>
                    <h5 className="text-lg tracking-tight text-black capitalize font-bold mb-3">{title}</h5>
                    <p className="flex items-center space-x-3 mt-1 text-2xl font-medium">
                        <span>৳{selling_price}</span>
                        {marked_price && <del>৳{marked_price}</del>}
                    </p>
                    <p className="mt-3 font-light whitespace-pre-line">{short_desc}</p>
                </div>

                <div className="mt-5 space-y-5">
                    <div>
                        <div className="flex items-center space-x-7">
                            <h5 className="font-semibold">Choose Size</h5>
                            <span className="text-xs text-red-500 cursor-pointer" onClick={() => setSelectedData({
                                color: "",
                                size: "",
                                quantity: 1,
                            })}>Clear Selection</span>
                        </div>

                        <div className="flex space-x-2">
                            {variants.filter(item => item.size !== "N/A").length > 0 ? variants.filter(item => item.size !== "N/A").map((item) => (
                                <p
                                    key={item.size}
                                    onClick={() => handleSizeSelect(item.size)}
                                    className={`${sizeStyle} ${selectedData.size === item.size && 'bg-gray-200 shadow ring-2 ring-sky-500'}`}
                                >
                                    {item.size}
                                </p>
                            )) :
                                <p
                                    onClick={() => handleSizeSelect("N/A")}
                                    className={`${sizeStyle} ${selectedData.size === "N/A" && 'bg-gray-200 shadow ring-2 ring-sky-500'}`}
                                >
                                    N/A
                                </p>}
                        </div>

                    </div>
                    <div>
                        <h5 className="mb-1 font-semibold">Choose Color</h5>
                        <div className="flex space-x-2">
                            {variants.map((item) => (
                                <div
                                    key={item.color}
                                    title={item.color}
                                    className={`w-11 h-11 rounded-xl cursor-pointer ${item.image === imagePath.index && "shadow ring-2 ring-sky-600"}`}
                                    onMouseOver={() => handleImage(item.image)}
                                    onClick={() => handleColorSelect(item.color)}
                                    style={{ backgroundColor: item.color }}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-1 font-semibold">Choose Quantity</h5>
                        <div className="w-32 inline-flex items-center justify-around py-2 px-3 border border-gray-300">
                            <LuMinus className="cursor-pointer" onClick={() => handleQuantityChange(-1)} />
                            <span className="font-semibold">{quantity}</span>
                            <GoPlus className="cursor-pointer" onClick={() => handleQuantityChange(1)} />
                        </div>
                    </div>
                    <p className="font-bold">Stock {stock}</p>
                </div>

                <div className="mt-7">
                    <div className="w-full">
                        <button className="custom-btn cart-btn">
                            <IoBagOutline  className="icon" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                    <div className="flex space-x-5 mt-5">
                        <button className="custom-btn buy-now-btn">
                            <PiShoppingBagOpenBold className="icon" />
                            <span>Buy now</span>
                        </button>
                        <button className="custom-btn wishlist-btn">
                            <IoHeartOutline className="icon" />
                            <span>Add to wishlist</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
