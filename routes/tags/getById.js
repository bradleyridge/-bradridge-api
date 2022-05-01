import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import * as Tag from '../../lib/database/models/Tag';

export const routePath = '/tags/:id';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx, id) => {

    // validate url parameter is UUID
    const { errors } = Tag.validate({ id }, { errorOnRequired: false });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);
    
    const tag = await Tag.getById(id);

    if (!tag) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = `"tag" record with id "${id}" not found.`;
        return ctx;
    }

    ctx.body = tag.toJSON();
    ctx.STATUS_CODES = STATUS_CODES.OK;
    return ctx;
};
