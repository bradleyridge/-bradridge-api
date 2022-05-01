import getPagination from '../ctx/getPagination';

export default (Model, state = {}, options = {}) => {
  const {
    showAll,
    pagination = getPagination(),
    withRelated = [],
  } = options;
  return showAll
    ? new Model().where(state).fetchAll({ withRelated })
    : new Model().where(state).fetchPage({ withRelated, ...pagination });
};
