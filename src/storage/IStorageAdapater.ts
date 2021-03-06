/**
 * Imports
 */
import Data from "../database/data";
import Schema from "../database/schema";

/**
 * Base Class of all Storage Adapters in Nacho to store longterm data.
 */
export default class IStorageAdapter {
    constructor() {
        /**
         * Init Adapter
         */
        this.init();
    }

    /**
     * Init Storage Adapter
     */
    init():void {}

    /**
     * Add Document to the storage
     * @param {Data} _data document
     */
    add(_data: Data):void {}

    /**
     * Get Document by ID
     * @param {string} _id id of the document
     * @return {Data} Data object
     */
    get(_id: string): Data | null { return null }

    /**
     * Get Documents by Filter
     * @param {Schema} _schema the schema that needs to be searched
     * @param {object} _filter filter object
     * @return {Array<Data>} Data object
     */
    find(_schema: Schema, _filter: object): Array<Data> { return [] }

    /**
     * Find One Document by filter
     * @param {Schema} _schema the schema that needs to be searched
     * @param {object} _filter filter object
     * @return {Data} Data object
     */
    findOne(_schema: Schema, _filter: object): Data | null { return null }

    /**
     * Remove Document by ID
     * @param {string} _id id of the document
     */
    remove(_id: string):void {}
}