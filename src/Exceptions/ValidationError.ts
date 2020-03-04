/**
 * Ошибка валидатора
 */
export class ValidationError extends Error {
    constructor(m: string) {
        super(m);
    }
}