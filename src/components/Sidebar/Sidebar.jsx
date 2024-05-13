import CategoriesDropDown from '../../utils/CategoriesDropDown'
import SubCategories from '../../utils/SubCategories'
import Brand from '../../utils/Brand'

export default function Sidebar() {
    return (
        <div className='w-[20%]'>
            <div className="collapse collapse-plus">
                <input type="checkbox" />
                <div className="collapse-title md:text-xl font-medium">
                    Categories
                </div>
                <div className="collapse-content">
                    <CategoriesDropDown />
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="checkbox" />
                <div className="collapse-title md:text-xl font-medium">
                    Sub Categories
                </div>
                <div className="collapse-content">
                    <SubCategories />
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus">
                <input type="checkbox" />
                <div className="collapse-title md:text-xl font-medium">
                    Brand
                </div>
                <div className="collapse-content">
                    <Brand />
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus">
                <input type="checkbox" />
                <div className="collapse-title md:text-xl font-medium">
                    Price Range
                </div>
                <div className="collapse-content">
                    <input type="range" className='range' />
                </div>
            </div>
        </div>
    )
}
