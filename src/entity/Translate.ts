import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
import {injectable} from "tsyringe";

@injectable()
@Entity({name: "translate_services"})
export class Translate {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    settings: string;
}
