import validator from 'validator';

import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import * as Post from '../../lib/database/models/Post';

export const routePath = '/posts/:id';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx, id) => {

    // validate url parameter is UUID
    const { errors } = Post.validate({ id }, { errorOnRequired: false });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);
    
    const post = await Post.getById(id);

    if (!post) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = `"Post" record with id "${id}" not found.`;
        return ctx;
    }

    ctx.body = post.toJSON();
    ctx.STATUS_CODES = STATUS_CODES.OK;
    return ctx;
};
