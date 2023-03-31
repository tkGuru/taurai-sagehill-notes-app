module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      uuid:{
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };

{/*var Sessions = database.define('sessions', {
        sid: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        expire: {
            type: Sequelize.DATE,
            allowNull: true
        },
        sess: Sequelize.JSON
    });
    return Sessions;
    
   sequelize.define("Session", {
  sid: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  userId: Sequelize.STRING,
  expires: Sequelize.DATE,
  data: Sequelize.TEXT,
});
  
  
  
  */}
  