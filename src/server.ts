import * as Koa from 'koa';
import * as Router from 'koa-router';
import "reflect-metadata";
import { postgresDB } from 'db/connection';

let cors = require('@koa/cors');
let logger = require('koa-logger');

const app = new Koa();
const router = new Router();
const PORT:number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(logger());
app.use(router.routes());

app.use(async (ctx, next)=>{
  try {
    await next();    
  } catch (error) {
    ctx.status = error.statusCode || error.status
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World JSk!';
});


app.listen(PORT);
console.log('Server running on port', PORT);

