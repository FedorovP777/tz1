import {IServiceProvider} from "./IServiceProvider";
import * as Bottle from "bottlejs";
import {CurrentTranslateProvider} from "../config/app";
import {TranslateService} from "../TranslateService";

export class TranslateProvider implements IServiceProvider {

    register(bottle: Bottle): Promise<void> {
        bottle.factory('TranslateService', () => {
            return new TranslateService(CurrentTranslateProvider, bottle.container.Logger);
        });
        return;
    }

}