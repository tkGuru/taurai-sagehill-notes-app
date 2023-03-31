module.exports = app => {
  const notes = require("../controllers/notesController.js");

  var router = require("express").Router();

  // Create a new Notes
  router.post("/create", notes.create);

  // Retrieve all Notes
  router.get("/find-all-notes", notes.findAll);


  // Retrieve a single note with id
  router.get("/:id", notes.findOne);

  // Update a note with id
  router.put("/update/:id", notes.update);

  // Delete a note with id
  router.delete("/:id", notes.delete);

  // Delete all Notes
  router.delete("/", notes.deleteAll);

  app.use('/api/notes', router);
};
