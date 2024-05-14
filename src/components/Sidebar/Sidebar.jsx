import CategoriesDropDown from '../../utils/CategoriesDropDown';
import SubCategories from '../../utils/SubCategories';
import Brand from '../../utils/Brand';
import { Accordion, AccordionDetails, AccordionSummary, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriceRanges from '../../utils/PriceRange';
import { useState } from 'react';

export default function Sidebar() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <h1 className='my-4 text-center text-lg font-bold'>Category</h1>
            <CategoriesDropDown />
            <h1 className='my-4 text-center text-lg font-bold'>SubCategory</h1>
            <SubCategories />
            <h1 className='my-4 text-center text-lg font-bold'>Brand</h1>
            <Brand />
        </div>
    )
}
