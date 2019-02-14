import * as Koa from 'koa';
import * as Router from 'koa-router';
import "reflect-metadata";
import * as cors from '@koa/cors';

const app = new Koa();
const router = new Router();
const PORT:number = Number(process.env.PORT) || 3000;

app.use(cors());

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
    ctx.body = 'Hello World JS!';
});

app.use(router.routes());

app.listen(PORT);
console.log('Server running on port 3000');

