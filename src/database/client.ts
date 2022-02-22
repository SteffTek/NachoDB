/**
 * Imports
 */
import NachoError from "../utils/error";
import Schema from './schema';
import Store from './store';

/**
 * Wrapper
 */
interface Schemas {[key: string]: Schema}

/**
 * Main Nacho Client
 */
export default class Client {
    _store: Store;
    schemas: Schemas
    constructor({ }) {
        /**
         * Init Default Values
         */
        this.schemas = {};
        this._store = new Store(this);
    }

    /**
     * Add a schema to the client
     * @param {Schema} _schema schema data
     * @param {string} _initiator name of the schema
     */
    public addSchema(_schema: Schema, _initiator: string): void {
        /**
         * Check initiator
         */
        if(!_initiator || !_initiator.length) {
            throw new NachoError('Initiator is required');
        }

        /**
         * Check if schema is already added
         */
        if(this.schemas.hasOwnProperty(_initiator)) {
            throw new NachoError(`Schema ${_initiator} already initialized`);
        }

        /**
         * Set Schema Client
         */
        _schema.setClient(this);
        _schema.setInitiator(_initiator);

        /**
         * Add Schema
         */
        this.schemas[_initiator] = _schema;
    }

}

