const {usersService} = require('../../services')
const {hashPassword, checkHashPassword} = require('../../helpers')

module.exports = {

    getAllUsers: async (req, res) => {

        const users = await usersService.getUsers()

        res.json(users)
    },

    createUser: async (req, res) => {

        const data = req.body

        data.password = await hashPassword(data.password)

        const newUser = await usersService.createUser(data)

        res.json(newUser)
    },

    updateUser: async(req, res) => {
        const data = req.body.data


        const user = await usersService.findAndUpdate(data)

        res.json(user)
    },

    deleteUser: async (req, res) => {
        const id = req.body.id

            console.log(id)
        await usersService.deleteUser(id)

        res.json('delete')
    },

    auth: async (req, res) => {
        const {email, password} = req.body


        const user = await usersService.findUserByEmail(email)

        if(user) {

            await checkHashPassword(password, user.password)


            res.json({_id: user._id, login: user.login, count: user.count, role: user.role})

        } else {
            res.json('no')
        }

    }
}