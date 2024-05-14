import { useEffect, useState } from "react";
import { useGetFilteredProductsQuery, useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";
import Sidebar from "../../Sidebar/Sidebar";
import Product from "./Product/Product";
import PaginationRounded from "../../../utils/Paginations";
import { useDispatch } from "react-redux";
import { addAllCategories } from "../../../Redux/Features/Products/productSlice";
import { useLocation } from "react-router-dom";

export default function Products() {
    const [productPages, setProductPages] = useState(1);
    const [showProduct, setShowProduct] = useState([])
    const { data: allProducts, isLoading, isError, isFetching } = useGetProductsQuery(productPages);

    const filterKeyword = useLocation().hash.split("#")[1];
    const { data: filteredProducts, isLoading: filterLoading, isError: filterError, isFetching: filterFetching } = useGetFilteredProductsQuery(filterKeyword, { skip: !filterKeyword });

    const dispatch = useDispatch();

    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError) content = <Error message="Product(s) not found!" />;

    if (!isLoading && !isError && showProduct?.length > 0) {
        content = showProduct.map(product => <Product key={product.id} product={product} />)
    }

    const handlePagination = (event, value) => {
        setProductPages(value)
    }
    useEffect(() => {
        if (allProducts?.products?.length > 0) {
            setShowProduct(allProducts?.products)
            const subCategories = allProducts?.products?.map(product => ({ brand: product.brand, category: product.category }));
            dispatch(addAllCategories(subCategories))
        }
        if (filterKeyword) {
            setShowProduct(filteredProducts?.products)
            const subCategories = filteredProducts?.products?.map(product => ({ brand: product.brand, category: product.category }));
            dispatch(addAllCategories(subCategories))
        }
    }, [allProducts?.products, filterKeyword])

    return (
        <div className="pb-20">
            <div className="flex">
                <Sidebar />
                <div className="lg:px-5 py-5 md:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-5">
                    {content}
                </div>

            </div>
            <div className="flex items-center justify-center mt-20">
                {isLoading || isFetching ? <Loading /> : <PaginationRounded totalPages={showProduct?.pages} currentPage={productPages} handlePagination={handlePagination} />}
            </div>
        </div>
    )
}
