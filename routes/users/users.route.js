const {Router} = require('express');
const router = Router();
const {usersController} = require('../../controllers')


router.get('/users', usersController.getAllUsers)

router.put('/users', usersController.updateUser)

router.put('/delete', usersController.deleteUser)

router.post('/register', usersController.createUser)

router.post('/auth', usersController.auth)


module.exports = router