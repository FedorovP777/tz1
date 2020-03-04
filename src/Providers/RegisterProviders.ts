import Bottle from 'bottlejs'
import winston, {Logger} from 'winston'

import {Global} from "../global";
import {Providers} from "../config/app";
import {Translate} from 'aws-sdk';

/**
 * Регистрация провайдеров
 */
export class RegisterProviders {
    bottle: Bottle;

    constructor() {
        this.bottle = new Bottle();
    }

    async register() {

        Global.app = this.bottle;
        for (const provider of Providers) {
            await provider.register(this.bottle)
        }
    }
}
