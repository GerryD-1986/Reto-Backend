const createError = require("http-errors");
const encrypt = require("../lib/encrypt");
const Users = require('../models/users');

async function create(userData){
    const userFound = await Users.findOne({email: userData.email});
    if(userFound){
        throw createError(409,"email already in use");
    }

    userData.password = await encrypt.encrypt(userData.password);
    const newUser = await Users.create(userData);
    return newUser;
}

async function getAll(){
    const allUsers = await Users.find();
    return allUsers;
}

async function getById(id){
    const user = await Users.findById(id);
    return user;
}

async function deleteById(id){
    const userDeleted = await users.findByIdAndDelete(id);
    return userDeleted;
}

async function updateById(id, newUserData){
    const updateUser = await Users.findByIdAndUpdate(id, newUserData, {new: true, } );
    return updateUser;

}

module.exports  ={
    create,
    getAll,
    getById,
    deleteById,
    updateById,
};