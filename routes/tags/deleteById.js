import * as Tag from '../../lib/database/models/Tag';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/tags/:id';
export const httpMethod = HTTP_METHODS.DEL;
export const handle = async (ctx, id) => {

    const { errors } = Tag.validate({ id }, { errorOnRequired: false });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    await Tag.destroy(id);

    ctx.status = STATUS_CODES.OK;
    ctx.body = `Deleted tag record with id "${id}"`;
    return ctx;
};
