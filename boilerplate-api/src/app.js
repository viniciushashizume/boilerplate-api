import express from "express";
import { registrarLog } from "./middlewares/registrarLog.js";
import { itemRoutes } from "./routes/itemRoutes.js";

let router = express();

router.use(express.json());

// router.use aplica o middleware em TODAS as rotas
router.use(registrarLog);

// Rotas: cada recurso cadastra as suas
itemRoutes(router);

export default router;
