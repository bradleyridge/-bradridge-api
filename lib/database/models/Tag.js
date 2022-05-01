import bookshelf from  '../../../config/bookshelf';
import { db } from '../../../lib/utils';
import { ATTRIBUTE_TYPES } from '../../../lib/utils/constants';

export const Model = bookshelf.model('Tag', {
    tableName: 'tag',
    hasTimestamps: true,
    idAttribute: 'id',
    uuid: true,
});

export const model = {
    id: { type: ATTRIBUTE_TYPES.UUID, required: false },
    name: { type: ATTRIBUTE_TYPES.STRING, required: true },
};

export const validate = (state, options) => db.validate(model, state, options);

export const create = (state) => db.create(Model, state);
export const destroy = (id) => db.destroy(Model, id);
export const get = (state, withRelated) => db.get(Model, state, withRelated);
export const getById = (id, options) => db.getById(Model, id, options);
export const update = (state, options) => db.update(Model, state, options);
