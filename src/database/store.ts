/**
 * Imports
 */
import Client from "./client";
import Data from "./data";
import ID from "../utils/ID";

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

    get(_id: ID): Data | null {
        return this._data.find(data => ID.compare(data._id, _id)) || null;
    }

    getAll(): Array<Data> {
        return this._data;
    }

    remove(_id: ID): void {
        this._data = this._data.filter(data => !ID.compare(data._id, _id));

        // TODO Events
    }

    update(_data: Data): void {
        // Set new data to persiting data
        this._data = this._data.map(data => {
            if(ID.compare(data._id, _data._id)) {
                return _data;
            }
            return data;
        });

        // TODO Events
    }
}