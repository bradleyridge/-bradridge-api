import validator from 'validator';

import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import { getPagination, setPagination } from '../../lib/utils/ctx';
import * as Post from '../../lib/database/models/Post';

export const routePath = '/posts';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx) => {

    // get pagination
    const pagination = getPagination(ctx);
    
    const posts = await Post.get({}, { pagination });

    if (!posts) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = 'Failed to fetch posts';
        return ctx;
    }

    setPagination(ctx, posts.pagination);

    ctx.body = posts.serialize();
    ctx.STATUS_CODES = STATUS_CODES.OK;
    return ctx;
};
