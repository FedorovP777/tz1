import {ITranslateService} from "./Translate/ITranslateService";
import {Logger} from "winston";
import {ITranslateResponse} from "./Translate/ITranslateResponse";
import {getMongoManager, MongoEntityManager} from "typeorm";

/**
 * Сервис перевода текста
 */
export class TranslateService {

    translateService: ITranslateService;
    logger: Logger;


    constructor(translateService: any, logger: Logger) {
        this.translateService = translateService
        this.logger = logger

    }


    async translate(from: string, to: string, text: string): Promise<ITranslateResponse> {
        return this.translateService.translate(from, to, text)
    }
}