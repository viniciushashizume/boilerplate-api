import mongoose from "./config/conexao.js";
import router from "./app.js";

let port = 3000;

router.listen(port, () => {
    console.log(`API rodando na porta: ${port}`);
});
