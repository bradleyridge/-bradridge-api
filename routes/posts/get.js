import validator from 'validator';

import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import * as Post from '../../lib/database/models/Post';

export const routePath = '/posts';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx) => {
    
    const posts = await Post.get();

    if (!posts) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = 'Failed to fetch posts';
    }

    ctx.body = posts.serialize();
    ctx.STATUS_CODES = STATUS_CODES.OK;
    return ctx;
};
