/**
 * Ошибка настроек
 */
export class SettingError extends Error {
    constructor(m: string) {
        super(m);
    }
}