import * as Post from '../../lib/database/models/Post';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/posts/:id';
export const httpMethod = HTTP_METHODS.DEL;
export const handle = async (ctx, id) => {

    const { errors } = Post.validate({ id }, { errorOnRequired: false });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    ctx.status = STATUS_CODES.OK;
    ctx.body = `Deleted post record with id "${id}"`;
    return ctx;
};
