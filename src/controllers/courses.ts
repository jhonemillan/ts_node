import { BaseContext } from 'koa';
import { Courses } from '../entity/Courses'
import {getConnection, getRepository, createQueryBuilder} from "typeorm";
import { getManager, Repository, Not, Equal } from 'typeorm';

export class CourseController{
    public static async getCourses(){
        const cRepository = getRepository(Courses);
        
        const data:Courses[]  = await cRepository.find();

        return data;       
        
    }

    public static async getCourse(id: number){
        const cRepository = getRepository(Courses);
        
        const course  = await createQueryBuilder("Courses")
                                      .leftJoinAndSelect("Courses.lessonss", "lessonss")
                                      .where("Courses.id = :id",{id: id})
                                      .getOne();
        console.log(course);
        return course;       
        
    }

    public static async saveCourse(course: any){
        const cRepository = getRepository(Courses);
        const newCourse: Courses = new Courses();

        newCourse.url = course.url;
        newCourse.description = course.description;
        newCourse.longDescription = course.longDescription;
        newCourse.seqNo = course.seqNo;
        newCourse.iconUrl = course.iconUrl;
        newCourse.comingSoon = course.comingSoon;
        newCourse.isNew = course.isNew;
        newCourse.isOngoing = course.isOngoing;
        newCourse.visibleFrom = course.visibleFrom;
        newCourse.createdAt = new Date();
        newCourse.updatedAt = new Date();
        newCourse.courseListIcon = null;
        console.log(newCourse);
        const userCreated = await cRepository.save(newCourse);

        return userCreated;
    }

    public static async updateCourse(id:number, course: any){

        let objectToUpdate: any = {}

        if (course.url) {
            objectToUpdate.url = course.url;
        }

        if (course.description) {
            objectToUpdate.description = course.description;
        }

        if (course.iconUrl) { 
            objectToUpdate.iconUrl = course.iconUrl;
        }

        return await        createQueryBuilder("Courses")
                            .update()
                            .set( objectToUpdate )
                            .where("id = :id", { id: id })
                            .execute();
    }
}