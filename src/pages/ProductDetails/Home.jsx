import { useParams } from "react-router-dom"
import { useGetSpecifiedProductQuery } from "../../Redux/Features/Products/productApi";
import Loading from "../../UI/Loading";
import Error from "../../UI/Error";
import ProductDetails from "./ProductDetails";
import "../../style/productDetails.css"
import RelatedProducts from "./RelatedProducts";

export default function ProductDetailsHome() {
    const productId = useParams().id;
    const { data, isLoading, isError, error } = useGetSpecifiedProductQuery(productId);
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError || !data?.id) content = <Error message="Product(s) not found!" />;

    return (
        <div className="py-14">
            {data?.id ? <>
                <ProductDetails product={data} />
                <RelatedProducts id={productId} />
            </> : content}
        </div>
    )
}
