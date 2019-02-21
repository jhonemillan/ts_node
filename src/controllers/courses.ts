import { BaseContext } from 'koa';
import { Courses } from '../entity/Courses'
import {getConnection, getRepository} from "typeorm";
import { getManager, Repository, Not, Equal } from 'typeorm';

export class CourseController{
    public static async getCourses(ctx: BaseContext){
        const cRepository = getRepository(Courses);
        
        const data:Courses[]  = await cRepository.find();
        
        ctx.status = 200;
        ctx.body = data;
    }
}