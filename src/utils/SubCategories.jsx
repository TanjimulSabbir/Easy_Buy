import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/categoryDropDown.css"

export default function SubCategories() {
    const allCategories = useSelector(state => state.productInfo.allCategories);
    const allSubCategories = allCategories?.map(item => ({ sub: item.category.sub, sub_slug: item.category.sub_slug }));
    const uniqueCategory = [];

    allSubCategories?.forEach(sub_c => {
        const findTitle = uniqueCategory.find(item => item.sub === sub_c.sub);
        !findTitle && uniqueCategory.push(sub_c);
    });

    const handleSubCategory = (category) => {
        toast.success(category.sub)
    }

    return (
        <div className="custom-category__main">
            {uniqueCategory.map(category => {
                return (
                    <div key={category.sub} className="dropMenu">
                        <Link className="space-x-3" to={`#${category.sub_slug}`} key={category.sub} onClick={() => handleSubCategory(category)}>
                            <input id={category.sub} type="checkbox" />
                            <label htmlFor={category.sub}>{category.sub}</label>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
