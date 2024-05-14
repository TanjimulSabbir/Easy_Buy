import { useSelector } from "react-redux";
import Cart from "./Cart";

export default function Carts() {
    const cartsData = useSelector(state => state.productInfo.carts);
    let content;
    if (cartsData.length > 0) {
        content = cartsData.map(cart => <Cart key={cart.productId} cart={cart} />)
    }
    return (
        <div>
            {content}
        </div>
    )
}
