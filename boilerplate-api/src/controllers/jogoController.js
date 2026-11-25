import {
    listarJogos,
    buscarJogo,
    criarJogo,
    atualizarJogo,
    removerJogo,
} from "../services/jogoService.js";

// Controller: recebe req e res, chama o service e responde

// GET /jogos: lista todos (200)
export async function listar(req, res) {
    let jogos = await listarJogos();
    res.send(jogos);
}

// GET /jogos/:id: 200, 404 ou 400
export async function buscar(req, res) {
    try {
        let jogo = await buscarJogo(req.params.id);

        // null: o _id tem o formato certo, mas não existe no banco
        if (jogo === null) {
            return res.status(404).send({ erro: "Jogo não encontrado" });
        }

        res.send(jogo);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

// POST /jogos: 201 ou 400
export async function criar(req, res) {
    try {
        let jogo = await criarJogo(req.body);
        res.status(201).send(jogo);
    } catch (erro) {
        // Erro de validação do Schema
        res.status(400).send({ erro: erro.message });
    }
}

// PUT /jogos/:id: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let jogo = await atualizarJogo(req.params.id, req.body);

        if (jogo === null) {
            return res.status(404).send({ erro: "Jogo não encontrado" });
        }

        res.send({ mensagem: "Jogo atualizado" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE /jogos/:id: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let jogo = await removerJogo(req.params.id);

        if (jogo === null) {
            return res.status(404).send({ erro: "Jogo não encontrado" });
        }

        res.send({ mensagem: "Jogo removido" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}
