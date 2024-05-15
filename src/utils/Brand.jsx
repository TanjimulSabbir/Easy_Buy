import { useDispatch, useSelector } from "react-redux";
import "../style/categoryDropDown.css"
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { addFilteringPath } from "../Redux/Features/Products/productSlice";
import toast from "react-hot-toast";

export default function Brand() {
  const { allCategories, searchPath } = useSelector(state => state.productInfo);
  const filterBrandCategory = allCategories?.map(category => category.brand);
  const uniqueBrandTitle = [...new Set(filterBrandCategory?.map(item => item.title))];
  const uniqueBrandSlug = [...new Set(filterBrandCategory?.map(item => item.slug))];
  const dispatch = useDispatch();

  const handleBrand = (data) => {
    dispatch(addFilteringPath(`brand=${data}`))
  }
  const paths = searchPath.map(item => item.split("=")[1])
  return (
    <div className="custom-category__main text-xs sm:text-base">
      {uniqueBrandTitle?.map((title, index) => {
        return (
          <div key={title} className="dropMenu">
            <p onClick={() => handleBrand(uniqueBrandSlug[index])} className={`space-x-3 ${paths.includes(uniqueBrandSlug[index]) && "active-item"}`}>
              <DragIndicatorIcon />
              <span className="cursor-pointer">{title}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}
