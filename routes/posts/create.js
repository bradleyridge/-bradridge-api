import * as Post from '../../lib/database/models/Post';
import { validate } from '../../lib/utils';
import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';

export const routePath = '/posts';
export const httpMethod = HTTP_METHODS.POST;
export const handle = async (ctx) => {

    const { errors, state } = Post.validate(ctx?.request?.body || {});
    if (errors.length > 0) return ctx.throw(STATUS_CODES.EXPECTATION_FAILED, `Failed to validate state: ${errors.join(', ')}`);

    console.log(`Creating post record with state:\n${JSON.stringify(state, null, 4)}`);

    ctx.body = (await Post.create(state))?.toJSON();

    if (!ctx.body) {
        ctx.status = STATUS_CODES.ERROR;
        return ctx;
    }

    ctx.status = STATUS_CODES.CREATED;
    return ctx;

};
