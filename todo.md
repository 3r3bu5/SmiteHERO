### TODO

- [x] Seeding data into DB
- [x] export entities types, response type to use in the client
- [x] Implement create Build
- [x] implement schema validation for endpoints
- [ ] Create Response type for controllers
- [x] User auth & JWT
- [x] Create unit and integration test
- [x] Create a model interface extends document in mongoose for every entity [instead of using document directly I edited the document interface to add the extra fields I need]
- [ ] Implement the auth for the client side nextjs app
- [ ] Create an implementation to save sessions even after the server restarts
- [ ] Add a monitoring tool
- [ ] Add an auditing
- [ ] Add a CI/CD
- [ ] Add caching
- [ ] Add a rate-limiting
- [ ] Add a tests for auth

### Problems

- [ ] **Problem**: two ids fields in (god, item, player, achievement) models
      **Description** : mongoose saves a document with \_id which it isn't useful while saving the in game models (god, item, player, achievement) since the api returns an id with each one of them.
      `You can only use this option on subdocuments. Mongoose can't save a document without knowing its id, so you will get an error if you try to save a document without an _id.` https://mongoosejs.com/docs/guide.html#_id

- [ ] **Problem**: Find a way to save sessions even after the server restarts
      **Description** :
