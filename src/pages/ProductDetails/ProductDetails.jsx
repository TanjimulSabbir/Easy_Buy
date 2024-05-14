import { useState } from "react";
import toast from "react-hot-toast";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { IoBagOutline, IoHeartOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { PiShoppingBagOpenBold, PiStorefrontThin } from "react-icons/pi";
import ReviewCounter from "../../utils/ReviewCounter";
import { useDispatch } from "react-redux";
import { addUserCart } from "../../Redux/Features/Products/productSlice";
import GetQuantity from "../../utils/getQuantity";

export default function ProductDetails({ product }) {
    const { id,
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
        setSelectedData(prev => ({ ...prev, quantity: newQuantity }))
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

    // using for unique sizes
    const filteredSizes = [...new Set(variants.map(item => item.size))];
    const dispatch = useDispatch();
    const handleCart = () => {
        let notSelected = []
        for (let item of Object.keys(selectedData)) {
            if (!selectedData[item]) notSelected.push(item)
        }
        if (notSelected.length === 0) {
            dispatch(addUserCart({ productId: id, title, selling_price, stock, imagePath, ...selectedData }));
            toast.success('Product added to cart successfully!')
        } else {
            toast.error(`${notSelected.map(item => item).join(" & ")} not selected!`)
        }

        // console.log(isAllSelectionOkay, "isAllSelectionOkay")
    }
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
                    <ReviewCounter reviewNum={3} />
                    <p className="mt-3 font-light whitespace-pre-line">{short_desc}</p>
                </div>

                <div className="mt-5 space-y-5">
                    <div>
                        <div className="flex items-center space-x-7">
                            <h5 className="font-semibold">Choose Size</h5>
                            <span className="text-xs lobster-two-regular text-red-500 cursor-pointer" onClick={() => setSelectedData({
                                color: "",
                                size: "",
                                quantity: 1,
                            })}>Clear all Selection</span>
                        </div>

                        <div className="mt-[6px] flex space-x-2">
                            {variants.filter(item => item.size !== "N/A").length > 0 ? filteredSizes.map((item) => (
                                <p
                                    key={item}
                                    onClick={() => handleSizeSelect(item)}
                                    className={`${sizeStyle} ${selectedData.size === item && 'bg-gray-200 shadow ring-2 ring-[#025ab8]'}`}
                                >
                                    {item}
                                </p>
                            )) :
                                <p
                                    onClick={() => handleSizeSelect("N/A")}
                                    className={`${sizeStyle} ${selectedData.size === "N/A" && 'bg-gray-200 shadow ring-2 ring-[#025ab8]'}`}
                                >
                                    N/A
                                </p>}
                        </div>

                    </div>
                    <div>
                        <h5 className="mb-[6px] font-semibold">Choose Color</h5>
                        <div className="flex space-x-2">
                            {variants.map((item) => (
                                <div
                                    key={item.color}
                                    title={item.color}
                                    className={`w-11 h-11 rounded-xl cursor-pointer ${item.color === selectedData.color && "shadow ring-2 ring-[#025ab8]"}`}
                                    onMouseOver={() =>{ handleImage(item.image);handleColorSelect(item.color)}}
                                   
                                    style={{ backgroundColor: item.color }}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-[6px] font-semibold">Choose Quantity</h5>
                        <GetQuantity quantity={selectedData.quantity} handleQuantityChange={handleQuantityChange} />
                    </div>
                    <p className="font-bold flex items-center space-x-1">
                        <PiStorefrontThin />
                        <span> Stock {stock}</span></p>
                </div>

                <div className="mt-7">
                    <div className="w-full" onClick={handleCart}>
                        <button className="custom-btn cart-btn">
                            <IoBagOutline className="icon" />
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
