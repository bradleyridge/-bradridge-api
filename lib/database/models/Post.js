import bookshelf from  '../../../config/bookshelf';

const Model = bookshelf.model('Post', {
    tableName: 'post',
    hasTimestamps: true,
    idAttribute: 'id',
    // hidden: [], // hidden unless explicitly requested
});

export default Model;

export const getById = (id, options = { require: false }) => new Model({ id }).fetch(options);

