
import { useGetProductsQuery } from "../../../Redux/Features/Products/productApi";
import Error from "../../../UI/Error";
import Loading from "../../../UI/Loading";
import { CategoriesDropDown } from "../../../utils/CategoriesDropDown";
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

    return (
        <div>{CategoriesDropDown}</div>
    )
}
