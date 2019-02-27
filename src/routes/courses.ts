import * as Router from 'koa-router';
import { CourseController } from '../controllers/courses';

const router = new Router({ prefix: '/course'});

router
    .get('/', async(ctx)=>{
        let data = await CourseController.getCourses();
        ctx.status = 200;
        ctx.body = data;
    })

    .get('/:id', async(ctx)=>{
        let course = await CourseController.getCourse(ctx.params.id)
        ctx.status = 200;
        ctx.body = course;
    })

    .post('/create', async(ctx)=>{
        let course = ctx.request.body.course
        console.log(course);
        ctx.status = 200
        ctx.body = 'course created';
    })

export { router as courserouter }

