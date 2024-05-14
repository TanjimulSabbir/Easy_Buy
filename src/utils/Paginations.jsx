import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ totalPages, currentPage, handlePagination }) {
    return (
        <Stack spacing={2}>
            <Pagination count={totalPages} page={currentPage} onChange={handlePagination} variant="outlined" shape="rounded" color='primary'/>
        </Stack>
    );
}
