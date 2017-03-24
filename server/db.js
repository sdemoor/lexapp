var Sequelize = require('sequelize');
var db = new Sequelize('slex', 'root', '');

// we define the models we need using js--we don't need a schema file!
var User = db.define('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  description: Sequelize.STRING,
  email: Sequelize.STRING,
  pd: Sequelize.STRING
});

var Message = db.define('Message', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  sender: Sequelize.STRING,
  recipient: Sequelize.STRING,
  text: Sequelize.STRING,
  room: Sequelize.STRING
});

var File = db.define('File', {
  fileid: Sequelize.STRING,
  filename: Sequelize.STRING
});

// puts a UserId column on each Message instance
// also gives us the `.setUser` method available
// after creating a new instance of Message
Message.belongsTo(User);
File.belongsTo(User);

// enables bi-directional associations between Users and Messages
User.hasMany(Message);
User.hasMany(File);


User.sync();
Message.sync();
File.sync();

// creates these tables in MySQL if they don't already exist. Pass in {force: true}
// to drop any existing user and message tables and make new ones.

exports.User = User;
exports.File = File;
exports.Message = Message;