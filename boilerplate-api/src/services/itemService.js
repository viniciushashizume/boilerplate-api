import {
    buscarTodos,
    buscarPorId,
    salvar,
    atualizarPorId,
    removerPorId,
} from "../repositories/itemRepository.js";

// Service: as regras de negócio (no exemplo, só repassa)

export async function listarItens() {
    return await buscarTodos();
}

export async function buscarItem(id) {
    return await buscarPorId(id);
}

export async function criarItem(dados) {
    return await salvar(dados);
}

export async function atualizarItem(id, dados) {
    return await atualizarPorId(id, dados);
}

export async function removerItem(id) {
    return await removerPorId(id);
}
