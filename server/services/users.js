const Users = require('../models/users');
const serviceReview = require('../services/reviews')

const createUser = async (body) => {
    const user = new Users({
        username: body.username,
        password: body.password,
        admin: Boolean,
        firstName: String,
        lastName: String,
        email: String
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


const updateReviewOfUser = async (id) => {

    const review = await serviceReview.getReviewByUserId(id)
    const user = await getUserById(id);

    if (!user)
        return null;

    if(!review)
        return null

    for (i = 0; i < review.length; i++) {
        console.log(review[i]._id)
        user.reviews = [review[i]._id];
        await user.save();
    }
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
    deleteUser
}