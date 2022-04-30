import Bookshelf from 'bookshelf';
import bookshelfUuid from 'bookshelf-uuid';
import Knex from 'knex';

import knexfile from '../knexfile';
import config from './index';

const knexConfiguration = knexfile[config.nodeEnv];
const knex = Knex(knexConfiguration);
const bookshelf = Bookshelf(knex);

bookshelf.plugin(bookshelfUuid);

export default bookshelf;