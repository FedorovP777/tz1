import {ITranslateResponse} from "./ITranslateResponse";

export interface ITranslateService {

    getName(): string;

    translate(from: string, to: string, text: string): Promise<ITranslateResponse>;
}