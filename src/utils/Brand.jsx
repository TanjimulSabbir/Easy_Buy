import { useState } from "react";
import { useSelector } from "react-redux";
import "../style/categoryDropDown.css"
import { Link } from "react-router-dom";

export default function Brand() {
  const allCategories = useSelector(state => state.productInfo.allCategories);
  const filterBrandCategory = allCategories?.map(category => category.brand);
  const uniqueBrandTitle = [...new Set(filterBrandCategory?.map(item => item.title))]
  const uniqueBrandSlug = [...new Set(filterBrandCategory?.map(item => item.slug))];
  const [brand, setBrand] = useState("")

  const handleBrand = (keyword) => {
    setBrand((prev) => prev === keyword ? "" : keyword);
  }

  return (
    <div className="custom-category__main">
      {uniqueBrandTitle?.map((title, index) => {
        return (
          <div key={title} className="dropMenu" onChange={() => handleBrand()}>
            <Link to={`#${uniqueBrandSlug[index]}`} className="space-x-3">
              <input className="cursor-pointer" id={title} type="checkbox" />
              <label className="cursor-pointer" htmlFor={title}>{title}</label>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
