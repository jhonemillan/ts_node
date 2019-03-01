import { BaseContext } from 'koa';
import {getConnection, getRepository, createQueryBuilder, QueryBuilder} from "typeorm";
import { getManager, Repository, Not, Equal } from 'typeorm';
import { Lessons } from 'entity/Lessons';

export class LessonsController{

    public static async GetLessonsByCourse(id_course: number){
       
        return await createQueryBuilder("Lessons")
                        //.innerJoinAndSelect("Lessons.course", "Courses")
                        .where("Lessons.course = :id", {id: id_course}) // .course measn to foreign key in class
                        .getMany();
    }
}