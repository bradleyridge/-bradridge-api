import validator from 'validator';

import { HTTP_METHODS, STATUS_CODES } from '../../lib/utils/constants';
import * as Post from '../../lib/database/models/Post';

export const routePath = '/posts/:id';
export const httpMethod = HTTP_METHODS.GET;
export const handle = async (ctx, id) => {

    // validate url parameter is UUID
    if (!validator.isUUID(id)) {
        ctx.status = STATUS_CODES.EXPECTATION_FAILED;
        ctx.message = `URL parameter "${id}" is not of type UUID.`
        return ctx;
    }
    
    ctx.body = await Post.getById(id);

    if (!ctx.body) {
        ctx.status = STATUS_CODES.NOT_FOUND;
        ctx.message = `"Post" record with id "${id}" not found.`;
    }
    return ctx;
};
