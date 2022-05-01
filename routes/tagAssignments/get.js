import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import { getPagination, setPagination } from '../../lib/utils/ctx';
import * as TagAssignment from '../../lib/database/models/TagAssignment';

export const routePath = '/tag-assignments';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx) => {

    // get pagination
    const pagination = getPagination(ctx);
    
    const tagAssignments = await TagAssignment.get({}, { pagination });

    if (!tagAssignments) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = 'Failed to fetch tag assignments';
        return ctx;
    }

    setPagination(ctx, tagAssignments.pagination);

    ctx.body = tagAssignments.serialize();
    ctx.STATUS_CODES = STATUS_CODES.OK;
    return ctx;
};
