# Brad Ridge - API

API webserver and database management for personal demo application `bradridge.dev`.

## High Level Architecture

The API is a koa webserver with a few endpoints to empower CRUD operations on blog posts and tags to support searching. It is hosted on Heroku (maybe AWS in the future).

### Setup Checklist

- [x] environment & variables (`env-cmd`, `12factor-config`)
- [x] `.editorconfig`
- [x] `babel-node` in order to use module syntax
- [x] hot-reload (`nodemon`)
- [x] webserver (`koa-compose`) *with one mock endpoint*
- [x] install postgresql locally
- [ ] blog post feature
    - [ ] `post` migration, model, & seed data
    - [ ] CRUD endpoints
- [ ] tag management feature
    - [ ] `tag` database migration, model, & seed data
    - [ ] CR_D endpoints
- [ ] feature - tagging blog posts
    - [ ] `tag_assignment` (polymorphic) migration, model, & seed data
    - [ ] C__D endpoints
    - [ ] update post endpoints to return related tags

## Local Development

### Database Setup

Install postgres locally (`brew install postgresql`).

Run postgres locally (`brew services start postgresql`).

### Troubleshooting

`EADRINUSE - Address Already In Use`

> Run `lsof -i :<port number>` and then `kill -9 <process_id>` to terminate any process using that port.