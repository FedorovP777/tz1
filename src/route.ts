import Router from "koa-router";
import {TranslateController} from "./Controller/TranslateController";

export const router = new Router;
router.post('/translate', TranslateController.translateText);