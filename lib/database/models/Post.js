import bookshelf from  '../../../config/bookshelf';
import { db } from '../../../lib/utils';
import { ATTRIBUTE_TYPES } from '../../../lib/utils/constants';

export const Model = bookshelf.model('Post', {
    tableName: 'post',
    hasTimestamps: true,
    idAttribute: 'id',
    uuid: true,
// hidden: [], // hidden unless explicitly requested
});

export const model = {
    id: { type: ATTRIBUTE_TYPES.UUID, required: false },
    title: { type: ATTRIBUTE_TYPES.STRING, required: true },
    message: { type: ATTRIBUTE_TYPES.STRING, required: true },
};

export const validate = (state) => db.validate(model, state);

export const create = (state) => db.create(Model, state);
export const getById = (id, options) => db.getById(Model, id, options);
