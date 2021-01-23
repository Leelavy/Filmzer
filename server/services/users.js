const Users = require('../models/users');


const createUser = async (body) => {
    const user = new Users({
        username: body.username,
        password: body.password,
        name: body.name,
    });

    return await user.save();
};


const getUsers = async () => {
    return await Users.find({});
};


const getByUsername = async (username) => {
    return await Users.find({'username': username});
};


const getUserById = async (id) => {
    return await Users.findById(id);
};


const updateUsername = async (id, username) => {
    const user = await getUserById(id);
    if (!user)
        return null;

    user.username = username
    await user.save();
    return user;
};


const updatePassword = async (id, password) => {
    const user = await getUserById(id);
    if (!user)
        return null;

    user.password = password
    await user.save();
    return user;
};


const deleteUser = async (id) => {
    const user = await getUserById(id);
    if (!user)
        return null;

    await user.remove();
    return user;
};


module.exports = {
    createUser,
    getUsers,
    getByUsername,
    getUserById,
    updateUsername,
    updatePassword,
    deleteUser
}