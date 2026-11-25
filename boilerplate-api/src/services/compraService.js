import {
    buscarTodos,
    buscarPorId,
    salvar,
    atualizarPorId,
    removerPorId,
} from "../repositories/compraRepository.js";

// Service: as regras de negócio
// Por enquanto só repassa para o repository: as regras entram na aula 5

export async function listarCompras() {
    return await buscarTodos();
}

export async function buscarCompra(id) {
    return await buscarPorId(id);
}

export async function criarCompra(dados) {
    return await salvar(dados);
}

export async function atualizarCompra(id, dados) {
    return await atualizarPorId(id, dados);
}

export async function removerCompra(id) {
    return await removerPorId(id);
}
