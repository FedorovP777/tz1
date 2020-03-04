import {ITranslateService} from "../ITranslateService";
import {ITranslateResponse} from "../ITranslateResponse";

import {Connection, ConnectionManager, getConnection, getMongoManager, MongoEntityManager} from "typeorm";
import {Translate as TranslateEntity} from "../../entity/Translate";
import Translate = require("aws-sdk/clients/translate");
import {getConnectionManager} from "typeorm/browser";
import {SettingError} from "../../Exceptions/SettingError";


export class AmazonTranslateService implements ITranslateService {

    name = 'AWS';


    async translate(from: string, to: string, text: string): Promise<any> {

        const translate = await getConnection().getRepository(TranslateEntity).findOne({name: 'AWS'});
        if (!translate) {
            throw new SettingError(`Settings not defined for ${this.getName()}`);
        }

        const client = new Translate(
            JSON.parse(translate.settings)
        );
        const params = {
            SourceLanguageCode: from,
            TargetLanguageCode: to,
            Text: text,
        };

        return new Promise((resolve, reject) => {
            if (reject) {
                console.log(reject)
            }
            client.translateText(params, (err, data) => {
                resolve({
                    'fromLang': data.SourceLanguageCode,
                    'toLang': data.TargetLanguageCode,
                    'text': data.TranslatedText
                })
            });
        });

    }


    getName(): string {
        return this.name;
    }

}