import { useEffect, useState } from "react";
import { useGetFilteredProductsQuery, useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";
import Sidebar from "../../Sidebar/Sidebar";
import Product from "./Product/Product";
import PaginationRounded from "../../../utils/Paginations";
import { useDispatch, useSelector } from "react-redux";
import { addAllCategories, addFilteringPath } from "../../../Redux/Features/Products/productSlice";
import { useLocation } from "react-router-dom";
import LoadingInline from "../../../UI/LoadingInLine";
import { Button, Chip } from "@mui/material";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Products() {
    const [productPages, setProductPages] = useState(1);
    const [showProduct, setShowProduct] = useState([]);
    const [totalPage, setTotalPage] = useState(1);
    const categoryPath = useLocation().hash.split("#")[1];
    const searchPath = useSelector(state => state.productInfo.searchPath);

    let filterPath;
    if (searchPath.length > 0) {
        filterPath = searchPath.map(item => item).join("&");
    }
    if (categoryPath) {
        filterPath = `${categoryPath}&${filterPath}`
    } else {
        filterPath = filterPath && `?${filterPath}`
    }

    const { data: allProducts, isLoading: allProductsLoading, isError: allProductsError, isFetching: allProductsFetching } = useGetProductsQuery(productPages, { skip: filterPath });

    const { data: filteredProducts, isLoading: filteredProductsLoading, isError: filteredProductsError, isFetching: filteredProductsFetching } = useGetFilteredProductsQuery(filterPath, { skip: !filterPath });

    const dispatch = useDispatch();
    console.log({ filteredProducts }, { filterPath }, "filteredProducts")

    let content;
    if (allProductsLoading || filteredProductsLoading) {
        content = <Loading />;
    } else if (allProductsError || filteredProductsError) {
        content = <Error message="Product(s) not found!" />;
    } else if (filterPath && filteredProducts?.products?.length === 0 || allProducts?.products?.length === 0) {
        content = <Error message="Product(s) not found!" />;
    } else if (showProduct.length > 0) {
        content = showProduct.map(product => <Product key={product.id} product={product} />);
    }

    if (filteredProductsFetching) content = <Loading />


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
        if (categoryPath && filteredProducts?.products?.length > 0) {
            setTotalPage(filteredProducts.pages)
            setShowProduct(filteredProducts.products)
            const subCategories = filteredProducts.products.map(product => ({ brand: product.brand, category: product.category }));
            dispatch(addAllCategories(subCategories))
        }
        if (filterPath && filteredProducts?.products?.length === 0 || allProducts?.products?.length === 0) {
            setTotalPage(0)
        }
    }, [allProducts?.products, categoryPath, filteredProducts?.products])

    console.log(filteredProducts, "showProducts");
    return (
        <div className="relative pb-20">
            <div className="flex items-center space-x-3 justify-center w-full pt-5">

                <Button size="small" variant="contained"
                    color={`${searchPath.length > 0 ? "error" : "success"}`}
                    className={`flex items-center space-x-1 rounded-full`}
                    onClick={() => dispatch(addFilteringPath("clear"))}> <FaRegTrashCan className="-mt-1" /> <span>Clear filter</span>
                </Button>
                <Button size="small" variant="outlined">{`Total Result ${totalPage} pages`}</Button>
            </div>
            <div className="flex">
                <Sidebar />
                <div className="mt-7 w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-7 mx-auto lg:px-3">
                    {content}
                </div>
            </div>
            <div className="flex items-center justify-center mt-20">
                {allProductsLoading || allProductsFetching || filteredProductsLoading || filteredProductsFetching ? <LoadingInline /> : <PaginationRounded totalPages={totalPage} currentPage={productPages} handlePagination={handlePagination} />}
            </div>
        </div>
    )
}
