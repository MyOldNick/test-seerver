const bcrypt = require('bcrypt');

module.exports = (pswd) => bcrypt.hash(pswd, 10)