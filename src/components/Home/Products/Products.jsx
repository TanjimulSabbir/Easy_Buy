
import { useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";
import Product from "./Product/Product";

export default function Products() {
    const { data: allProducts, isLoading, isError, error } = useGetProductsQuery();
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError || allProducts?.products?.length === 0) content = <Error message="Product(s) not found!" />;

    if (!isLoading && !isError && allProducts?.products?.length > 0) {
        content = allProducts.products.map(product => <Product key={product.id} product={product} />)
    }
    return (
        <div>Products: {content}</div>
    )
}
