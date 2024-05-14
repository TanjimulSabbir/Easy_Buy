import { useState } from "react";

import { useSelector } from "react-redux"

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
    <div>
      {uniqueBrandTitle?.map((title, index) => {
        return (
          <div key={title} className="space-x-3" onChange={() => handleBrand(uniqueBrandSlug[index])}>
            <input className="cursor-pointer" id={title} type="checkbox" />
            <label  className="cursor-pointer" htmlFor={title}>{title}</label>
          </div>
        )
      })}
    </div>
  )
}
