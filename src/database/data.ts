/**
 * Imports
 */
import Schema from './schema';
import NachoError from "../utils/NachoError";
import ID, { validate as validateID} from '../utils/ID';

/**
 * Interfaces
 */

/**
 * Data File
 * This file is resolved data from a schema.
 */
export default class Data {
    _id: ID;
    private _ttl: number;
    private _schema: Schema;
    private _offline: boolean = false;
    private _timestamp: number | null = null;
    constructor(_schema: Schema, _data: any) {
        /**
         * Set Data
         */
        this._schema = _schema;
        this._ttl = _schema.getTTL();

        /**
         * Assign Data to this class
         */
        Object.assign(this, _data);

        /**
         * Create Defaults
         */
        if(!this._timestamp) {
            this._timestamp = Date.now();
        }

        /**
         * Check for ID
         */
        this._id = new ID(_data._id);

        /**
         * Check for ID
         */
        if(!validateID(this._id)) {
            throw new NachoError(`Invalid ID: ${this._id}`);
        }
    }

    /**
     * Get Time to live
     * @return {number} time to live in seconds
     */
    public getTTL(): number {
        return this._ttl;
    }

    /**
     * Save the current document to the database
     */
    public save(): void {
        if(!this._schema._client) return;
        // Refresh current state (_timestamp)
        this._timestamp = Date.now();
        this._schema._client._store.add(this);
    }

    /**
     * Delete the current document from the database
     */
    public delete(): void {
        if(!this._schema._client) return;
        // Refresh current state (_timestamp)
        this._timestamp = Date.now();
        this._schema._client._store.remove(this._id);
    }
}