import compose from 'koa-compose';

import getPost from './getPost';

export default compose([getPost]);