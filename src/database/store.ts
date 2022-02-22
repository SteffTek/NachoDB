/**
 * Imports
 */
import Client from "./client";
import Data from "./data";

/**
 * Storing Data
 */
export default class Store {
    private _data: Array<Data>;
    private _client: Client;
    /**
     * Constructor
     * @param {Client} _client client to use
     */
    constructor(_client: Client) {
        this._client = _client;
        this._data = []; // Init data store
    }

    add(_data: Data): void {
        // Check if data is already set
        if(this.get(_data._id)) {
            this.update(_data);
            return;
        }

        this._data.push(_data);

        // TODO Events
    }

    get(_id: string): Data | null {
        return this._data.find(data => data._id === _id) || null;
    }

    getAll(): Array<Data> {
        return this._data;
    }

    remove(_id: string): void {
        this._data = this._data.filter(data => data._id !== _id);

        // TODO Events
    }

    update(_data: Data): void {
        // Set new data to persiting data
        this._data = this._data.map(data => {
            if(data._id === _data._id) {
                return _data;
            }
            return data;
        });

        // TODO Events
    }
}