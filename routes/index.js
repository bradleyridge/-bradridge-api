import bodyParser from 'koa-bodyparser';

// routes
import posts from './posts';

export default [
    bodyParser(),
    posts,
]