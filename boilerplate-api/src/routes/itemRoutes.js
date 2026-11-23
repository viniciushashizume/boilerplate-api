import {
    listar,
    buscar,
    criar,
    atualizar,
    remover,
} from "../controllers/itemController.js";

// Recebe o router do app.js e cadastra as rotas de itens
export function itemRoutes(router) {
    router.get("/itens", listar);
    router.get("/itens/:id", buscar);
    router.post("/itens", criar);
    router.put("/itens/:id", atualizar);
    router.delete("/itens/:id", remover);
}
