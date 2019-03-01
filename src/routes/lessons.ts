import * as Router from 'koa-router';
import { LessonsController } from 'controllers/lessons';
import { Lessons } from '../entity/Lessons';

const router = new Router({ prefix: '/lesson'});

router

        .get('/all/course/:id', async(ctx)=>{
            const data = await LessonsController.GetLessonsByCourse(ctx.params.id);

            if (data) {
                ctx.status = 200;
                ctx.body = data;
            }
            else{
                ctx.status = 400;
                ctx.body = {status: "error"}
            }
        })

export {router as lessonrouter};