import {IServiceProvider} from "./IServiceProvider";
import * as Bottle from "bottlejs";
import winston from "winston";

export class LogProvider implements IServiceProvider {
    register(bottle: Bottle): Promise<void> {

        bottle.factory('Logger', () => {

            return winston.createLogger({
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(
                            winston.format.colorize(),
                            winston.format.simple()
                        )
                    }),
                    new winston.transports.File({filename: 'combined.log'})
                ],
                level: process.env.LOG_LEVEL
            });
        });

        return;
    }
}