import ProducteRepository from "../repositories/product.repository.js"
import SupplierRepository from "../repositories/supplier.repository.js"

async function createProduct(product){
    if(await SupplierRepository.getSupplier(product.supplier_id)){
    return await ProducteRepository.insertProduct(product);
    }
    throw new Error ("O supplier_id informado não existe.")
}

async function getProducts(){
    return await ProducteRepository.getProducts();
}

async function getProduct(id){
    return await ProducteRepository.getProduct(id);
}

async function deleteProduct(id){
    await ProducteRepository.deleteProduct(id);
}

async function updateProduct(product){
    if(await SupplierRepository.getSupplier(product.supplier_id)){
    return await ProducteRepository.updateProduct(product);
    }
    throw new Error ("O supplier_id informado não existe.")
}
export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}