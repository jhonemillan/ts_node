import { BaseContext } from 'koa';
import {getConnection, getRepository, createQueryBuilder, QueryBuilder} from "typeorm";
import { getManager, Repository, Not, Equal } from 'typeorm';
import { Lessons } from 'entity/Lessons';
import { Courses } from 'entity/Courses';

export class LessonsController{

    public static async GetLessonsByCourse(id_course: number){
       
        return await createQueryBuilder("Lessons")
                        //.innerJoinAndSelect("Lessons.course", "Courses")
                        .where("Lessons.course = :id", {id: id_course}) // .course measn to foreign key in class
                        .getMany();
    }

    public static async SaveLesson(id: number, lesson: any){
        const newLesson : Lessons = new Lessons();
        newLesson.description = lesson.description;
        newLesson.duration = lesson.duration;
        newLesson.gitHubUrl = lesson.gitHubUrl;
        newLesson.pro = lesson.pro;
        newLesson.seqNo = lesson.seqNo;
        newLesson.tags = lesson.tags;
        newLesson.url = lesson.url;
                
        const lRepository = getRepository(Lessons);
        const cRepository = getRepository(Courses);

        let course: Courses = await cRepository.findOne(id);
        newLesson.course = course;
               
        return await lRepository.save(newLesson);
    }
}