const express = require('express');
const userController = require('../controllers/users');
var router = express.Router();


router.route('/')
    .post(userController.createUser)
    .get(userController.getUsers);


router.route('/:username')
    .get(userController.getByUsername)
    .patch(userController.updateUsername);


router.route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteUser)


router.route('/:id/:password')
    .patch(userController.updatePassword)


module.exports = router;
