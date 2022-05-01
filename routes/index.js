import route from 'koa-route';
import bodyParser from 'koa-bodyparser';

// routes
import posts from './posts';
import tags from './tags';
import tagAssignments from './tagAssignments';

const routeDefinitions = [
    ...posts,
    ...tags,
    ...tagAssignments,
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