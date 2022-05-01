import * as TagAssignment from '../../lib/database/models/TagAssignment';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/tag-assignments/:id';
export const httpMethod = HTTP_METHODS.DEL;
export const handle = async (ctx, id) => {

    const { errors } = TagAssignment.validate({ id }, { errorOnRequired: false });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    await TagAssignment.destroy(id);

    ctx.status = STATUS_CODES.OK;
    ctx.body = `Deleted tag assignment record with id "${id}"`;
    return ctx;
};
