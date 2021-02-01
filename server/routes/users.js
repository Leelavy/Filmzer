const express = require('express');
const userController = require('../controllers/users');
var router = express.Router();


//http://localhost:8080/users/updateReviewOfUser/:id
router.route('/updateReviewOfUser/:id')
    .patch(userController.updateReviewOfUser);


//http://localhost:8080/users
router.route('/')
    .post(userController.createUser)
    .get(userController.getUsers);


//http://localhost:8080/users/:username
router.route('/:username')
    .get(userController.getByUsername)


//http://localhost:8080/users/:id
router.route('/:id')
    .get(userController.getUserById)
    .delete(userController.deleteUser)
    .patch(userController.updateUser);


// router.route('/:id/:password')
//     .patch(userController.updatePassword)


module.exports = router;
