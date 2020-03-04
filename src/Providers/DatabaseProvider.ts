import {IServiceProvider} from "./IServiceProvider";
import * as Bottle from "bottlejs";
import {createConnection} from "typeorm";
import {DBEntity} from "../config/app";

export class DatabaseProvider implements IServiceProvider {
    async register(bottle: Bottle): Promise<void> {
        await createConnection({
            type: "mongodb",
            host: process.env.MONGO_HOST,
            port: parseInt(process.env.MONGO_PORT),
            username: process.env.MONGO_USERNAME,
            password: process.env.MONGO_PASSWORD,
            database: process.env.MONGO_DATABASE,
            entities: DBEntity,
            synchronize: false,
            logging: false
        });
    }

}