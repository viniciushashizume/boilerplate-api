import {
    buscarTodos,
    buscarPorId,
    salvar,
    atualizarPorId,
    removerPorId,
} from "../repositories/jogoRepository.js";

// Service: as regras de negócio
// Por enquanto só repassa para o repository: as regras entram na aula 5

export async function listarJogos() {
    return await buscarTodos();
}

export async function buscarJogo(id) {
    return await buscarPorId(id);
}

export async function criarJogo(dados) {
    return await salvar(dados);
}

export async function atualizarJogo(id, dados) {
    return await atualizarPorId(id, dados);
}

export async function removerJogo(id) {
    return await removerPorId(id);
}
