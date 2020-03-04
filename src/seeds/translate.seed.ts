import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import {Translate} from "../entity/Translate";
import {getMongoManager} from "typeorm";

export default class CreateTranslate implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {

        const translate = new Translate();
        translate.name = "AWS";
        translate.settings = JSON.stringify({
            apiVersion: '2017-07-01',
            region: 'eu-central-1',
            accessKeyId: 'AKIAXSUVJUFVY6SVDH46',
            secretAccessKey: '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'
        });


        const manager = getMongoManager();
        await manager.save(translate);
    }
}