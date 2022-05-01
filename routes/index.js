import route from 'koa-route';
import bodyParser from 'koa-bodyparser';

// routes
import posts from './posts';

const routeDefinitions = [
    ...posts,
];
console.log(`Building ${routeDefinitions.length} routes:`);

const routes = routeDefinitions.map(({ httpMethod, routePath, handle }) => {
    console.log(`- ${httpMethod.toUpperCase()} ${routePath}`);
    return route[httpMethod](routePath, handle);
});

export default [
    bodyParser(),
    ...routes,
]