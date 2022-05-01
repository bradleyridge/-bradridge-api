import * as Tag from '../../lib/database/models/Tag';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/tags/:id';
export const httpMethod = HTTP_METHODS.PUT;
export const handle = async (ctx, id) => {

    const { errors, state } = Tag.validate({ ...ctx.request.body, id });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    const tag = await Tag.update(state);

    if (!tag) {
        ctx.status = STATUS_CODES.ERROR;
        return ctx;
    }

    ctx.status = STATUS_CODES.OK;
    ctx.body = tag.toJSON();
    return ctx;

};
