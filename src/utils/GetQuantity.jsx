import { GoPlus } from 'react-icons/go'
import { LuMinus } from 'react-icons/lu'

export default function GetQuantity({ quantity, handleQuantityChange }) {
    return (
        <div className="w-32 inline-flex items-center justify-around py-2 px-3 border border-gray-300">
            <LuMinus className="cursor-pointer" onClick={() => handleQuantityChange(-1)} />
            <span className="font-semibold">{quantity}</span>
            <GoPlus className="cursor-pointer" onClick={() => handleQuantityChange(1)} />
        </div>
    )
}
