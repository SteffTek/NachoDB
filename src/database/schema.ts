/**
 * Imports
 */
import ValidateData from "../utils/validateData";
import NachoError from "../utils/error";
import Client from './client';
import Data from "./data";

/**
 * Schema File
 * This file is a blueprint to create database schemas.
 */
export default class Schema {
    _ttl: number;
    _client: Client | null;
    _typedef: object;
    _initiator: string | null;
    constructor(_typedef: Object) {
        /**
         * Default Values
         */
        this._ttl = 0;
        this._client = null;
        this._initiator = null;

        /**
         * Check if toplevel model is valid
         */
        Schema.checkNames(_typedef);

        /**
         * Assign Data to this class
         */
        this._typedef = _typedef;
    }

    /**
     * Create a new schema instance
     */
    public create(_data: Object): Data {
        /**
         * Check if toplevel data is valid
         */
        Schema.checkNames(_data);

        /**
         * Check if data validity is on par with model schema
         */
        Schema.checkData(_data);

        /**
         * Create new Data Object
         */
        return new Data(this, _data);
    }

    /**
     * After a certain amount of time, the client will drop a schema instance
     * @param {number} _ttl time to live in seconds
     */
    public setTTL(time: number): Schema {
        this._ttl = time;
        return this;
    }

    public getTTL(): number {
        return this._ttl;
    }

    /**
     * Set client object
     */
    public setClient(_client: Client): void {
        this._client = _client;
    }

    /**
     * Set Initiator
     */
    public setInitiator(_initiator: string): void {
        this._initiator = _initiator;
    }

    /**
     * Utility
     */
    private static checkNames(_data: object): void {
        /**
         * Check if any of the data keys start with _
         */
        for(let key in _data) {
            if(key.startsWith('_')) {
                // Throw Invalid Key Error
                throw new NachoError(`Invalid key ${key}`);
            }
        }
    }

    /**
     * Check if every key in the data is valid
     * Includes sub-keys
     * @param {object} _data data to validate
     */
    private static checkData(_data: object): void {
        const result = ValidateData(_data);
        // TODO
    }
}