const usersService = require('../services/users');


const createUser = async (req, res) => {
    const newuser = await usersService.createUser(req.body);
    res.json(newuser);
};


const getUsers = async (req, res) => {
    const users = await usersService.getUsers();
    res.json(users);
};


const getByUsername = async (req, res) => {
    const user = await usersService.getByUsername(req.params.username);

    if (!user) {
        return res.status(404).json({errors: ['username not found']});
    }

    res.json(user);
};


const getUserById = async (req, res) => {
    const user = await usersService.getUserById(req.params.id);

    if (!user){
        return res.status(404).json({errors: ['user_id not found']});
    }

    res.json(user);
};


const updateUsername = async (req, res) => {
    if (!req.body.username) {
        res.status(400).json({
            message: "username is required",
        });
    }

    const user = await usersService.updateUsername(req.params.id, req.body.username);
    if (!user) {
        return res.status(404).json({ errors: ['username not found'] });
    }

    res.json(user);
};


const updatePassword = async (req, res) => {
    if (!req.body.password) {
        res.status(400).json({
            message: "username is required",
        });
    }

    const user = await usersService.updatePassword(req.params.id, req.body.password);
    if (!user) {
        return res.status(404).json({ errors: ['password not found'] });
    }

    res.json(user);
};


const updateReviewOfUser = async (req, res) => {

    if (!req.body) {
        res.status(400).json({
            message: "users param are required",
        });
    }

    const user = await usersService.updateReviewOfUser(req.params.id);
    if (!user) {
        return res.status(404).json({ errors: ['user not found'] });
    }

    res.json(user);
};


const deleteUser = async (req, res) => {
    const user = await usersService.deleteUser(req.params.id);
    if (!user) {
        return res.status(404).json({ errors: ['user not found'] });
    }

    res.send();
};


module.exports = {
    createUser,
    getUsers,
    getByUsername,
    getUserById,
    updateUsername,
    updatePassword,
    updateReviewOfUser,
    deleteUser
}