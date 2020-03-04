import {IServiceProvider} from "../Providers/IServiceProvider";
import {ConfigProvider} from "../Providers/ConfigProvider";
import {LogProvider} from "../Providers/LogProvider";
import {HttpProvider} from "../Providers/HttpProvider";
import {TranslateProvider} from "../Providers/TranslateProvider";
import {AmazonTranslateService} from "../Translate/Amazon/AmazonTranslateService";
import {ITranslateService} from "../Translate/ITranslateService";
import {Translate} from "../entity/Translate";
import {DatabaseProvider} from "../Providers/DatabaseProvider";


export const Providers: IServiceProvider[] = [
    new ConfigProvider,
    new LogProvider,
    new HttpProvider,
    new DatabaseProvider,
    new TranslateProvider
];

export const DBEntity: any = [Translate];

export const CurrentTranslateProvider: ITranslateService = new AmazonTranslateService;