import React from 'react';
import { createPages } from '../../../utils/pages';


const Pagination = ({ pagesArray, totalPages, currentPage, changePage }) => {
    createPages(pagesArray, totalPages, currentPage)
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={currentPage === p ? "page page__current" : "page"}>{p}
                </span>
            )}
        </div>
    );
};

export default Pagination;