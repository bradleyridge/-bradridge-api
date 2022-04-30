import Koa from 'koa';
import compose from 'koa-compose';
import logger from 'koa-logger';

import config from './config';
import routes from './routes';

const app = new Koa();

if (config.nodeEnv === 'development') app.use(logger());
app.use(compose(routes));

export default app;

