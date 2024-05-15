import CategoriesDropDown from '../../utils/CategoriesDropDown';
import SubCategories from '../../utils/SubCategories';
import Brand from '../../utils/Brand';
import { Accordion, AccordionDetails, AccordionSummary, Button, Drawer, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriceRanges from '../../utils/PriceRange';
import { useState } from 'react';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <div className="relative">
            <div className='hidden lg:block w-[280px]'>
                <h1 className='pb-3 -mt-3 text-center text-lg font-bold'>Category</h1>
                <CategoriesDropDown />
                <h1 className='my-4 text-center text-lg font-bold'>SubCategory</h1>
                <SubCategories />
                <h1 className='my-4 text-center text-lg font-bold'>Brand</h1>
                <Brand />
            </div>
            <div className='lg:hidden'>
                <p className='absolute -top-11 md:-top-12 left-3 flex items-center justify-center cursor-pointer' onClick={toggleDrawer(true)}> <WidgetsOutlinedIcon />
                </p>
                <Drawer open={open} onClose={toggleDrawer(false)} className='block'>
                    <h1 className='my-1 text-center text-lg font-bold'>Category</h1>
                    <CategoriesDropDown />
                    <h1 className='my-4 text-center text-lg font-bold'>SubCategory</h1>
                    <SubCategories />
                    <h1 className='my-4 text-center text-lg font-bold'>Brand</h1>
                    <Brand />
                </Drawer>
            </div>
        </div>
    )
}
