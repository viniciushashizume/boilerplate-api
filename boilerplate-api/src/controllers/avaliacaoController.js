import {
    listarAvaliacoes,
    buscarAvaliacao,
    criarAvaliacao,
    atualizarAvaliacao,
    removerAvaliacao,
} from "../services/avaliacaoService.js";

// Controller: recebe req e res, chama o service e responde

// GET /avaliacoes: lista todas (200)
export async function listar(req, res) {
    let avaliacoes = await listarAvaliacoes();
    res.send(avaliacoes);
}

// GET /avaliacoes/:id: 200, 404 ou 400
export async function buscar(req, res) {
    try {
        let avaliacao = await buscarAvaliacao(req.params.id);

        // null: o _id tem o formato certo, mas não existe no banco
        if (avaliacao === null) {
            return res.status(404).send({ erro: "Avaliação não encontrada" });
        }

        res.send(avaliacao);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

// POST /avaliacoes: 201 ou 400
export async function criar(req, res) {
    try {
        let avaliacao = await criarAvaliacao(req.body);
        res.status(201).send(avaliacao);
    } catch (erro) {
        // Erro de validação do Schema
        res.status(400).send({ erro: erro.message });
    }
}

// PUT /avaliacoes/:id: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let avaliacao = await atualizarAvaliacao(req.params.id, req.body);

        if (avaliacao === null) {
            return res.status(404).send({ erro: "Avaliação não encontrada" });
        }

        res.send({ mensagem: "Avaliação atualizada" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE /avaliacoes/:id: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let avaliacao = await removerAvaliacao(req.params.id);

        if (avaliacao === null) {
            return res.status(404).send({ erro: "Avaliação não encontrada" });
        }

        res.send({ mensagem: "Avaliação removida" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}
