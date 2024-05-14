import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function RangeSlider() {
    const minPrice = 0;
    const maxPrice = 1000;

    return (
        <Box>
            <Slider
                defaultValue={600}
                min={minPrice}
                max={maxPrice}
                valueLabelDisplay="auto"
            />
        </Box>
    );
}
