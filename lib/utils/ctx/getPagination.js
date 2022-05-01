/* eslint-disable camelcase */
export default (ctx) => {
    if (!ctx || !ctx.query) return { page: 1, pageSize: 10 };
    const { page_index, page_limit } = ctx.query;
    return {
      page: page_index || 1,
      pageSize: page_limit || 10,
    };
  };
  