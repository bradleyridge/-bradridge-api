import route from 'koa-route';

const routePath = '/posts/:id';

export default route.get(routePath, async (ctx, id) => {
    ctx.body = `Route ID: "${id}"`;
    return ctx;
});
