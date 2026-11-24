import Compra from "../models/Compra.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Compra.find();
}

export async function buscarPorId(id) {
    return await Compra.findById(id);
}

export async function salvar(dados) {
    return await Compra.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Compra.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Compra.findByIdAndDelete(id);
}

// Filtro: as compras de um cliente ("minhas compras")
// "cliente.email": o ponto entra no subdocumento
export async function buscarPorEmailCliente(email) {
    return await Compra.find({ "cliente.email": email });
}

// Filtro: as compras de um cliente que têm um jogo específico
// "itens.jogoId": procura em TODOS os itens do array
export async function buscarComprasDoJogo(email, jogoId) {
    return await Compra.find({ "cliente.email": email, "itens.jogoId": jogoId });
}
