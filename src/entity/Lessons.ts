import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId, UpdateDateColumn} from "typeorm";
import {Courses} from "./Courses";


@Entity("Lessons")
@Index("sortByUrl",["url",],{unique:true})
export class Lessons {

    @PrimaryGeneratedColumn({
        type:"integer", 
        name:"id"
        })
    id:number;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"url"
        })
    url:string | null;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"description"
        })
    description:string;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"duration"
        })
    duration:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"seqNo"
        })
    seqNo:number;
        

   
    @ManyToOne(type=>Courses, Courses=>Courses.lessonss,{  })
    @JoinColumn({ name:'courseId'})
    course:Courses | null;


    @Column("boolean",{ 
        nullable:true,
        default: () => "false",
        name:"pro"
        })
    pro:boolean | null;
            

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"gitHubUrl"
        })
    gitHubUrl:string;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        default: () => "''",
        name:"tags"
        })
    tags:string | null;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"createdAt"
        })
    createdAt:Date;
        

    @UpdateDateColumn({ 
        nullable:false,
        name:"updatedAt"
        })
    updatedAt:Date;
        
}
