### TODO

- [ ] Seeding data into DB

### Problems

- [ ] **Problem**: two ids fields in (god, item, player, acheivement) models
      **Description** : mongoose saves a document with \_id which it isn't useful while saving the in game models (god, item, player, acheivement) since the api returns an id with each one of them.
      `You can only use this option on subdocuments. Mongoose can't save a document without knowing its id, so you will get an error if you try to save a document without an _id.` https://mongoosejs.com/docs/guide.html#_id

- [ ] **Problem**: Find a wany to save sessions even after the server restarts
      **Description** :