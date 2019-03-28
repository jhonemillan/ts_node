import * as Koa from 'koa';
import * as Router from 'koa-router';
import "reflect-metadata";
import { postgresDB } from 'db/connection';
import { router } from 'routes'
import { authrout } from 'routes/auth';
const session = require('koa-session');
const passport = require('koa-passport');
var bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

let cors = require('@koa/cors');
let logger = require('koa-logger');

const app = new Koa();
const PORT:number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(logger());
app.use(bodyParser());
app.use(serve('./public'));

app.use(session(app));
require('auth/auth');
app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next)=>{
  try {    
    ctx.body = ctx.request.body;
    await next();    
  } catch (error) {
    ctx.status = error.statusCode || error.status
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});

app.listen(PORT);
console.log('Server running on port', PORT);

