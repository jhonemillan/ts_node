import * as Koa from 'koa';
import * as Router from 'koa-router';
import "reflect-metadata";
import { postgresDB } from 'db/connection';
import { router } from 'routes'
var bodyParser = require('koa-bodyparser');

let cors = require('@koa/cors');
let logger = require('koa-logger');

const app = new Koa();
const PORT:number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(logger());
app.use(bodyParser());
app.use(router.routes());

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

