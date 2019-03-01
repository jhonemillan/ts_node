import * as Router from 'koa-router';
import { courserouter } from 'routes/courses';
import { postgresDB } from 'db/connection';
import { lessonrouter } from 'routes/lessons'
const router = new Router();

postgresDB().then((conn)=>{
    console.log(conn);
})

router.use(courserouter.routes());
router.use(lessonrouter.routes());

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World JSk!';
});


export { router }

