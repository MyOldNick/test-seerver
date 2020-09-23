const userModel = require('../../database/models/user.model')

module.exports = {

    createUser: (data) => new userModel(data).save(),

    getUsers: () => userModel.find({}, {_id: 1, login: 1, email: 1, count: 1}),

    findAndUpdate: (data) => userModel.update({_id: data._id }, {count: data.count}),

    findUserByEmail: async (email) => {
        try{
            return await   userModel.findOne({email: email})

        } catch (e) {
            console.log(e)
        }
    },

    deleteUser: (id) => userModel.remove({_id: id})
}