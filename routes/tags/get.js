import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import { getPagination, setPagination } from '../../lib/utils/ctx';
import * as Tag from '../../lib/database/models/Tag';

export const routePath = '/tags';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx) => {

    // get pagination
    const pagination = getPagination(ctx);
    
    const tags = await Tag.get({}, { pagination });

    if (!tags) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = 'Failed to fetch tags';
        return ctx;
    }

    setPagination(ctx, tags.pagination);

    ctx.body = tags.serialize();
    ctx.STATUS_CODES = STATUS_CODES.OK;
    return ctx;
};
