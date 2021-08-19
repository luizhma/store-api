import SuppliereRepository from "../repositories/supplier.repository.js"

async function createSupplier(supplier){
    return await SuppliereRepository.insertSupplier(supplier);
}

async function getSuppliers(){
    return await SuppliereRepository.getSuppliers();
}

async function getSupplier(id){
    return await SuppliereRepository.getSupplier(id);
}

async function deleteSupplier(id){
    await SuppliereRepository.deleteSupplier(id);
}

async function updateSupplier(supplier){
    return await SuppliereRepository.updateSupplier(supplier);
}
export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}