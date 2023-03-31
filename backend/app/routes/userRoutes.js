module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/register", users.create);
  
    router.post("/login", users.Login);

    //router.get("/getUser", users.User);

    router.delete('/logout', users.logOut);
    
    app.use('/api/user', router);
  };
  