import Avaliacao from "../models/Avaliacao.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Avaliacao.find();
}

export async function buscarPorId(id) {
    return await Avaliacao.findById(id);
}

export async function salvar(dados) {
    return await Avaliacao.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Avaliacao.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Avaliacao.findByIdAndDelete(id);
}

// Filtro: as avaliações de um jogo
export async function buscarPorJogo(jogoId) {
    return await Avaliacao.find({ "jogo.id": jogoId });
}
