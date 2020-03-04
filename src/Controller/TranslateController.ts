import {Context} from "koa";
import validator from 'validator';
import {ValidationError} from "../Exceptions/ValidationError";
import {Global} from "../global";
import {SettingError} from "../Exceptions/SettingError";

export class TranslateController {


    static async translateText(context: Context) {
        try {
            //@ts-ignore
            const request = context.request.body;

            if (!request.hasOwnProperty('from') ||
                !request.hasOwnProperty('to') ||
                !request.hasOwnProperty('text')) {
                throw new ValidationError('Error validate');
            }

            if (
                !validator.isLength(request.from, {min: 2, max: 10})) {
                throw new ValidationError('Field "from" min 2, max 10 length');
            }
            if (
                !validator.isLength(request.to, {min: 2, max: 10})) {
                throw new ValidationError('Field "to" min 2, max 10 length');
            }
            if (
                !validator.isLength(request.text, {min: 1, max: 10000})) {
                throw new ValidationError('Field "from" min 1, max 10000 length');
            }


            const translateService = Global.app.container.TranslateService
            const resultTranslate = await translateService.translate(request.from, request.to, request.text);
            context.body = resultTranslate

        } catch (e) {
            context.status = 400;
            if (e instanceof ValidationError)
                context.body = {error: true, description: e.message}
            else if (e instanceof SettingError) {
                context.body = {error: true, description: e.message}
            } else {
                context.body = {error: true, description: "Error"}
            }
        }
    }
}