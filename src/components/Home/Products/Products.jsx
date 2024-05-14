import { useState } from "react";
import { useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";
import Sidebar from "../../Sidebar/Sidebar";
import Product from "./Product/Product";
import PaginationRounded from "../../../utils/Paginations";

export default function Products() {
    const [productPages, setProductPages] = useState(1)
    const { data: allProducts, isLoading, isError, isFetching } = useGetProductsQuery(productPages);
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <Error message="Product(s) not found!" />;

    if (!isLoading && !isError && allProducts?.products?.length > 0) {
        content = allProducts.products.map(product => <Product key={product.id} product={product} />)
    }

    const handlePagination = (event, value) => {
        setProductPages(value)
    }
    return (
        <div className="pb-20">
            <div className="flex">
                <Sidebar />
                <div className="lg:px-5 py-5 md:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-5">
                    {content}
                </div>

            </div>
            <div className="flex items-center justify-center mt-20">
                {isLoading || isFetching ? <Loading /> : <PaginationRounded totalPages={allProducts?.pages} currentPage={productPages} handlePagination={handlePagination} />}
            </div>
        </div>
    )
}
