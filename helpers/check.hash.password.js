const bcrypt = require('bcrypt');

module.exports = async (password, hashedPassword) => {

    const isPasswordEquals = await bcrypt.compare(password, hashedPassword)

    if(!isPasswordEquals) {
        throw new Error
    }
}