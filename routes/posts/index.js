import compose from 'koa-compose';

import getById from './getById';

export default compose([getById]);