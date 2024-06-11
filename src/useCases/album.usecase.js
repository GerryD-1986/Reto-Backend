const createHttpError = require("http-errors");
const Album = require("../models/album");

async function createAlbum(albumData, userId){
    const newAlbum = await Album.create(albumData, albumId);
    return newAlbum;
}

async function getAllAlbums(){
    const allAlbums = await Album.find();
    return allAlbums;
}

async function getByIdAlbum(id){
    const album = await Album.findById(id);
    return album;
}

module.exports = {
    createAlbum,
    getAllAlbums,
    getByIdAlbum,
}