import {
    listarCompras,
    buscarCompra,
    criarCompra,
    atualizarCompra,
    removerCompra,
} from "../services/compraService.js";

// Controller: recebe req e res, chama o service e responde

// GET /compras: lista todas (200)
export async function listar(req, res) {
    let compras = await listarCompras();
    res.send(compras);
}

// GET /compras/:id: 200, 404 ou 400
export async function buscar(req, res) {
    try {
        let compra = await buscarCompra(req.params.id);

        // null: o _id tem o formato certo, mas não existe no banco
        if (compra === null) {
            return res.status(404).send({ erro: "Compra não encontrada" });
        }

        res.send(compra);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

// POST /compras: 201 ou 400
export async function criar(req, res) {
    try {
        let compra = await criarCompra(req.body);
        res.status(201).send(compra);
    } catch (erro) {
        // Erro de validação do Schema
        res.status(400).send({ erro: erro.message });
    }
}

// PUT /compras/:id: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let compra = await atualizarCompra(req.params.id, req.body);

        if (compra === null) {
            return res.status(404).send({ erro: "Compra não encontrada" });
        }

        res.send({ mensagem: "Compra atualizada" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE /compras/:id: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let compra = await removerCompra(req.params.id);

        if (compra === null) {
            return res.status(404).send({ erro: "Compra não encontrada" });
        }

        res.send({ mensagem: "Compra removida" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}
