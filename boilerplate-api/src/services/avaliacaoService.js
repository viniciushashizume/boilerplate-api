import {
    buscarTodos,
    buscarPorId,
    salvar,
    atualizarPorId,
    removerPorId,
} from "../repositories/avaliacaoRepository.js";

// Service: as regras de negócio
// Por enquanto só repassa para o repository: as regras entram na aula 5

export async function listarAvaliacoes() {
    return await buscarTodos();
}

export async function buscarAvaliacao(id) {
    return await buscarPorId(id);
}

export async function criarAvaliacao(dados) {
    return await salvar(dados);
}

export async function atualizarAvaliacao(id, dados) {
    return await atualizarPorId(id, dados);
}

export async function removerAvaliacao(id) {
    return await removerPorId(id);
}
