import dotenv from 'dotenv'
import {IServiceProvider} from "./IServiceProvider";
import Bottle from 'bottlejs'

export class ConfigProvider implements IServiceProvider {

    register(bottle: Bottle): Promise<void> {
        dotenv.config();
        return;
    }
}
