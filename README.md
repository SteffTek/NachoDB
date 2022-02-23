# NachoDB
## Network Attached Object Database

A fast, decentral, in-memory database for NoSQL documents.

---
# WIP

### Components
#### Core
- NachoDB (this)
- NachoPy (the node core, but in py)
#### Network (Integrated in Core)
- NachoSalsa (Socket application layer syncs all)
- NachoWhip (WebRTC humongus interface pillar)

#### Storage (Integrated in Core)
- LocalBowl (localStore)
- MangoBowl (MongoDB)

### Storage Priority
- In-Memory Storage (Data will be voided after TTL exceeded)
- Storage Adapters (Data will be loaded from a local storage adapter if available)
- Network Adapter (Data will be automatically synced from the network into local/memory storage)

### States
- Every Document has a _timestamp
- If an update for the document arrives through the network, only merge it if the remote _timestamp < NOW
- If _timestamp < current timestamp, dont update, we have the newer document

### Sync
- (TBD) On initialisation, ask for every document on every schema over the network and sync it into the local storage adapter
- Eventually, all clients will be synced (Eventual Consistency Theroem)
- Maybe it makes sense, i dunno
- If you try to send data, but you are offline, a document is marked as offline, and will retry on reconnect to send it
- Offline Marked Documents are loaded on startup