const createHttpError = require("http-errors");
const Orden = require("../models/orden");

async function createOrden(ordenData, userId){
    const newOrden = await Orden.create(ordenData, userId)
    return newOrden;
}

async function getAllOrden(){
    const allOrden = await Orden.find();
    return allOrden;
}

async function deleteByIdOrden(id){
    const ordennDeleted = await orden.findByIdAndDelete(id);
    return ordennDeleted;
}

module.exports = {
    createOrden,
    getAllOrden,
    deleteByIdOrden,
}