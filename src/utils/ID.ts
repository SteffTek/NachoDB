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
export function validate(id: string): boolean {
    return validatev4(id);
}