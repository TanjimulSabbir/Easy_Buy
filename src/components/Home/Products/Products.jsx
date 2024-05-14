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
    const [showProduct, setShowProduct] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const { data: allProducts, isLoading: allProductsLoading, isError: allProductsError, isFetching: allProductsFetching } = useGetProductsQuery(productPages);

    const filterKeyword = useLocation().hash.split("=")[1];
    const { data: filteredProducts, isLoading: filteredProductsLoading, isError: filteredProductsError, isFetching: filteredProductsFetching } = useGetFilteredProductsQuery(filterKeyword, { skip: !filterKeyword });

    const dispatch = useDispatch();

    let content;
    if (allProductsLoading || filteredProductsLoading) {
        content = <Loading />;
    } else if (allProductsError || filteredProductsError || showProduct?.length <= 0) {
        content = <Error message="Product(s) not found!" />;
    } else if (showProduct.length > 0) {
        content = showProduct.map(product => <Product key={product.id} product={product} />);
    }

    const handlePagination = (event, value) => {
        setProductPages(value)
    }
    useEffect(() => {
        if (allProducts?.products?.length > 0) {
            setTotalPage(allProducts.pages)
            setShowProduct(allProducts.products)
            const subCategories = allProducts.products?.map(product => ({ brand: product.brand, category: product.category }));
            dispatch(addAllCategories(subCategories))
        }
        if (filterKeyword && filteredProducts?.products?.length > 0) {
            setTotalPage(filteredProducts.pages)
            setShowProduct(filteredProducts.products)
            const subCategories = filteredProducts.products.map(product => ({ brand: product.brand, category: product.category }));
            dispatch(addAllCategories(subCategories))
        }
    }, [allProducts?.products, filterKeyword])

    console.log(showProduct, "showProducts");
    return (
        <div className="pb-20">
            <div className="flex">
                <Sidebar />
                <div className="lg:px-5 py-5 md:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-5">
                    {content}
                </div>

            </div>
            <div className="flex items-center justify-center mt-20">
                {allProductsLoading || allProductsFetching || filteredProductsLoading || filteredProductsFetching ? <Loading /> : <PaginationRounded totalPages={totalPage} currentPage={productPages} handlePagination={handlePagination} />}
            </div>
        </div>
    )
}
