import {
    listarItens,
    buscarItem,
    criarItem,
    atualizarItem,
    removerItem,
} from "../services/itemService.js";

// Controller: recebe req e res, chama o service e responde

// GET: lista todos (200)
// async: necessário para usar o await dentro da função
export async function listar(req, res) {
    let itens = await listarItens();
    res.send(itens);
}

// GET por id: 200, 404 ou 400
export async function buscar(req, res) {
    try {
        let item = await buscarItem(req.params.id);

        if (item === null) {
            return res.status(404).send({ erro: "Item não encontrado" });
        }

        res.send(item);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

// POST: 201 ou 400
export async function criar(req, res) {
    try {
        let item = await criarItem(req.body);
        res.status(201).send(item);
    } catch (erro) {
        // Erro de validação do Schema (ou de uma regra do service)
        res.status(400).send({ erro: erro.message });
    }
}

// PUT: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let item = await atualizarItem(req.params.id, req.body);

        if (item === null) {
            return res.status(404).send({ erro: "Item não encontrado" });
        }

        res.send({ mensagem: "Item atualizado" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let item = await removerItem(req.params.id);

        if (item === null) {
            return res.status(404).send({ erro: "Item não encontrado" });
        }

        res.send({ mensagem: "Item removido" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}
