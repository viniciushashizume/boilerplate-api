import Jogo from "../models/Jogo.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Jogo.find();
}

export async function buscarPorId(id) {
    return await Jogo.findById(id);
}

export async function salvar(dados) {
    return await Jogo.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Jogo.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Jogo.findByIdAndDelete(id);
}

// Filtro: os jogos de um gênero (para o catálogo)
export async function buscarPorGenero(genero) {
    return await Jogo.find({ genero: genero });
}
