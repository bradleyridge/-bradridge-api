import route from 'koa-route';
import validator from 'validator';

import { STATUS_CODES } from '../../lib/constants';
import * as Post from '../../lib/database/models/Post';

const routePath = '/posts/:id';

export default route.get(routePath, async (ctx, id) => {

    // validate url parameter is UUID
    if (!validator.isUUID(id)) {
        ctx.status = STATUS_CODES.EXPECTATION_FAILED;
        ctx.message = `URL parameter "${id}" is not of type UUID.`
        return ctx;
    }
    
    ctx.body = await Post.getById(id);
    return ctx;
});
