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
        let course = ctx.request.body.course;
        let newUser = await CourseController.saveCourse(course);

        if (newUser) {
            ctx.status = 200
            ctx.body = 'course created';            
        }else
        {
            ctx.status = 500;
            ctx.body = {"error": "error"}
        }
    })

    .patch('/update/:id', async(ctx)=>{
        let updated = await CourseController.updateCourse(ctx.params.id, ctx.request.body.course);
        console.log(updated);
        if (updated) {
            ctx.status = 200;
            ctx.body = {"status": "success"}
        }
    })

export { router as courserouter }

