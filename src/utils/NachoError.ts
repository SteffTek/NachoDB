/**
 * Nacho Error
 */
export default class NachoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NachoError';

        // Set the prototype explicitly.
        Object.setPrototypeOf(this, NachoError.prototype);
    }
}