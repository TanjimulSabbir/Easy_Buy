import Slider from "react-slick";
import Loading from "../../UI/Loading";
import Error from "../../UI/Error";
import { useGetRelatedProductsQuery } from "../../Redux/Features/Products/productApi";
import Product from "../../components/Home/Products/Product/Product";
import { GiveTitle } from "../../utils/GiveTitle";
export default function RelatedProducts({ id }) {
    const { data, isLoading, isError, error } = useGetRelatedProductsQuery(id);
    let content;
    if (isLoading) content = <Loading />;
    if (!isLoading && isError || !data?.products?.length === 0) content = <Error message="Product(s) not found!" />;

    console.log('====================================');
    console.log(data, "related products");
    console.log('====================================');
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container mt-10 container mx-auto">
            <div className="mb-5">
                <GiveTitle text="Top Picks for you" />
            </div>
            {data?.products?.length > 0 ? <Slider {...settings}>
                {data.products.map(product => (<Product key={product.id} product={product} />))}
            </Slider > : content}
        </div>
    )
}
