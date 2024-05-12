import { useGetProductsQuery } from "../../../Redux/Features/Products/productApi"
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";

export default function Products() {
    const { data: allProducts, isLoading, isError, error } = useGetProductsQuery();
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <Error message="Product(s) not found!" />;
    // if(!isLoading&&!isError&& allProducts.)
    return (
        <div>Products: {content}</div>
    )
}
