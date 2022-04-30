import config from './config';
import app from './app';

console.log(`Init app with env:\n ${JSON.stringify(config, null, 4)}\n`);

app.listen(config.port);
