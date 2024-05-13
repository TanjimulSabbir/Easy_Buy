
import { useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";
import Sidebar from "../../Sidebar/Sidebar";

import Product from "./Product/Product";

export default function Products() {
    const { data: allProducts, isLoading, isError, error } = useGetProductsQuery();
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError || allProducts?.products?.length === 0) content = <Error message="Product(s) not found!" />;

    if (!isLoading && !isError && allProducts?.products?.length > 0) {
        // const allCategores = allProducts.products.map(product => ({ category: product.category.cat, subCategory: product.category.sub, immediate: product.category.imd }))
        // console.log(allCategores, "from products page")
        content = allProducts.products.map(product => <Product key={product.id} product={product} />)
    }

    console.log(allProducts?.products)
    return (
        <div className="flex">
            <Sidebar />
            <div className="md:max-w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-5">
                {content}
            </div>
        </div>
    )
}
