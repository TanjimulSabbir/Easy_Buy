import { useDispatch, useSelector } from "react-redux";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import "../style/categoryDropDown.css";
import { addFilteringPath } from "../Redux/Features/Products/productSlice";


export default function SubCategories() {
    const { allCategories, searchPath } = useSelector(state => state.productInfo);
    const allSubCategories = allCategories?.map(item => ({ sub: item.category.sub, sub_slug: item.category.sub_slug }));
    const uniqueCategory = [];
    const dispatch = useDispatch();

    allSubCategories?.forEach(sub_c => {
        const findTitle = uniqueCategory.find(item => item.sub === sub_c.sub);
        !findTitle && uniqueCategory.push(sub_c);
    });

    const handleSubCategory = (sub_category) => {
        dispatch(addFilteringPath(`sub_category=${sub_category}`))
    }
    const paths = searchPath.map(item => item.split("=")[1])
    console.log()
    return (
        <div className="custom-category__main text-xs sm:text-base">
            {uniqueCategory.map(category => {
                return (
                    <div key={category.sub} className="dropMenu">
                        <p className={`space-x-3 ${paths.includes(category.sub_slug) && "active-item"}`} onClick={() => handleSubCategory(category.sub_slug)}>
                            <DragIndicatorIcon />
                            <span>{category.sub}</span>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}
