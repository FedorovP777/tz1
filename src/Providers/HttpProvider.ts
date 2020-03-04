import {IServiceProvider} from "./IServiceProvider";
import * as Bottle from "bottlejs";
import Koa from "koa";
import Json from "koa-json";
import Bodyparser from "koa-bodyparser";
import {router} from "../route";

export class HttpProvider implements IServiceProvider {

    register(bottle: Bottle): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const koa = new Koa;
            koa.use(Bodyparser())
            koa.use(Json())
            koa.use(router.routes()).use(router.allowedMethods())
            koa.listen(3000, resolve)
        });
    }
}