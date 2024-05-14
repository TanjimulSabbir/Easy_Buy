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
        <div className='w-[20%] hidden lg:block'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Category
                </AccordionSummary>
                <AccordionDetails>
                    <CategoriesDropDown />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Sub_Category
                </AccordionSummary>
                <AccordionDetails>
                    <SubCategories />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Brand
                </AccordionSummary>
                <AccordionDetails>
                    <Brand />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Price Range
                </AccordionSummary>
                <AccordionDetails>
                    <PriceRanges />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
