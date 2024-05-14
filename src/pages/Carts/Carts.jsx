import { useSelector } from "react-redux";
import Cart from "./Cart";
import Error from "../../UI/Error";

export default function Carts() {
    const cartsData = useSelector(state => state.productInfo.carts);
    let content;
    if (cartsData.length > 0) {
        content = cartsData.map(cart => <Cart key={cart.productId} cart={cart} />)
    } else {
        content = <Error message="No Cart Found!" />
    }
    return (
        <div className="py-10 w-1/2 mx-auto space-y-10">
            {content}
        </div>
    )
}
