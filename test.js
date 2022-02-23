const { Client, Schema, Types } = require("./dist/index");

console.log(new Types.ID().toString());


const client = new Client();

/**
 * Create a new schema
 */
const schema = new Schema({
    name: String,
    age: Number,
    createdAt: Date,
    updatedAt: Date
});

client.addSchema(schema, "Test");
/**
 * Log
 */
const document = client.schemas.Test.create({
    name: "John Doe",
    age: 25,
    createdAt: new Date(),
    updatedAt: new Date()
});

document.save();

console.log(client._store);

document.delete();

/**
 * Event Listening
 */

// NEW
// UPDATED
// DELETE
// schema.on("new/update/delete", (data) => {});

/**
 * Netzwerk "Protokoll" Sockets
 */

// {
//     timestamp: Date,
//     type: "UPDATED","NEW","DELETE", "QUERY", "ANSWER"
//     data: DATA,
//     packetNumber: Number,
//     sender: String,
// }

// QUERY
// client => server => (broadcast) => clientY ("EY ICH HAB WAS!") => server (schaut sender nach) => client

// UPDATED / NEW / DELETE
// client => server => (broadcast) => client ('ich lösch was/aktualisiere/etc);