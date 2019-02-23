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
                                      .innerJoinAndSelect("Courses.lessonss", "lessonss")
                                      .where("Courses.id = :id",{id: id})
                                      .getOne();

        return course;       
        
    }
}