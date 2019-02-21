import * as Router from 'koa-router';
import { CourseController } from '../controllers/courses';

const router = new Router({ prefix: '/course'});

router
    .get('/', async(ctx)=>{
        await CourseController.getCourses(ctx);
    });

export { router as courserouter }

