import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {Lessons} from "./Lessons";


@Entity("Courses",{schema:"public"})
export class Courses {

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
        

    @Column("text",{ 
        nullable:false,
        name:"longDescription"
        })
    longDescription:string;
        

    @Column("integer",{ 
        nullable:false,
        name:"seqNo"
        })
    seqNo:number;
        

    @Column("character varying",{ 
        nullable:false,
        length:255,
        name:"iconUrl"
        })
    iconUrl:string;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"comingSoon"
        })
    comingSoon:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"isNew"
        })
    isNew:boolean;
        

    @Column("boolean",{ 
        nullable:false,
        default: () => "false",
        name:"isOngoing"
        })
    isOngoing:boolean;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        default: () => "'1970-01-31 18:00:00-05'",
        name:"visibleFrom"
        })
    visibleFrom:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"createdAt"
        })
    createdAt:Date;
        

    @Column("timestamp with time zone",{ 
        nullable:false,
        name:"updatedAt"
        })
    updatedAt:Date;
        

    @Column("character varying",{ 
        nullable:true,
        length:255,
        name:"courseListIcon"
        })
    courseListIcon:string | null;
        

   
    @OneToMany(type=>Lessons, Lessons=>Lessons.course)
    lessonss:Lessons[];
    
}
