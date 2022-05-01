const defaultPagination = {
    pageSize: 10, // number of rows on each page
    page: 1, // current page
    pageCount: 1, // total number of pages
    rowCount: 1, // number of results
  };
  
  export default (ctx, pagination = defaultPagination) => {
    const { pageSize, page, pageCount, rowCount, totalCount } = pagination;
    ctx.set('X-Pagination-Limit', pageSize); // number of entries per page
    ctx.set('X-Pagination-Index', page); // current page number
    ctx.set('X-Pagination-Count', rowCount); // total entries for result set
    ctx.set('X-Pagination-Page-Count', pageCount); // total pages for result set
    if (totalCount) ctx.set('X-Pagination-Total-Count', totalCount); // total pages for result set
  };
  