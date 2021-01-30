const Users = require('../models/users');

const createUser = async (body) => {
    const user = new Users({
        username: body.username,
        password: body.password,
        admin: body.admin,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
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


const updateReviewOfUser = async (id, review) => {

    const user = await getUserById(id);

    if (!user)
        return null;

    if(!review)
        return null

    if(user.reviews.indexOf(review._id) === -1){
        user.reviews.push(review._id);
    }
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
    updateReviewOfUser,
    deleteUser,
}