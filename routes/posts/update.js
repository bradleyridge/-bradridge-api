import * as Post from '../../lib/database/models/Post';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/posts/:id';
export const httpMethod = HTTP_METHODS.PUT;
export const handle = async (ctx, id) => {

    const { errors, state } = Post.validate({ ...ctx.request.body, id });
    if (errors.length > 0) ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    const post = await Post.update(state);

    if (!post) {
        ctx.status = STATUS_CODES.ERROR;
        return ctx;
    }

    ctx.status = STATUS_CODES.OK;
    ctx.body = post.toJSON();
    return ctx;

};
