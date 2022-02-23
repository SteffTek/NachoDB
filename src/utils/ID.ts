/**
 * Imports
 */
import { v4 as uuidv4, validate as validatev4 } from 'uuid';

/**
 * Generate ID
 */
export function generate(): string {
    return uuidv4();
}

/**
 * Validate ID
 */
export function validate(id: ID): boolean {
    return validatev4(id.toString());
}

export default class ID {
    private readonly __id: string;
    constructor(id: string | null = null) {
        this.__id = id || generate();
    }

    /**
     * Get ID String
     * @returns {string} id
     */
    toString():string {
        return this.__id;
    }

    /**
     * Compare two IDs
     * @param {ID} id1 first ID
     * @param {ID} id2 second ID
     * @returns {boolean} equals
     */
    public static compare(id1: ID, id2: ID):boolean {
        return id1.toString() === id2.toString();
    }
}