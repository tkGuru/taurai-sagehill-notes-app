const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const argon2 = require("argon2");


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password ? req.body.password : false
  };


  // Save user in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating User."
      });
    });
};

exports.Login = async (req, res) =>{
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "User not found"});
    //const match = await argon2.verify(req.body.password, user.password);
    //if(!match) return res.status(400).json({msg: "Wrong Password"});
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    res.status(200).json({uuid, name, email});
}


// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};


exports.logOut = (req, res) =>{
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json("User has been logged out.")
};
  
