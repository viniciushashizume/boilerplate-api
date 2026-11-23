import Item from "../models/Item.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Item.find();
}

export async function buscarPorId(id) {
    return await Item.findById(id);
}

export async function salvar(dados) {
    return await Item.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Item.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Item.findByIdAndDelete(id);
}
