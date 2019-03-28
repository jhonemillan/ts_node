import * as Router from 'koa-router';
import { courserouter } from 'routes/courses';
import { postgresDB } from 'db/connection';
import { lessonrouter } from 'routes/lessons'
import { authrout } from './auth';

const router = new Router();

postgresDB().then((conn)=>{
    console.log(conn);
})

router.use(authrout.routes());
router.use(courserouter.routes());
router.use(lessonrouter.routes());

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World JSk!';
});


export { router }

