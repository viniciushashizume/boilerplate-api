import mongoose from "mongoose";

let itemSchema = new mongoose.Schema({
    nome: {
        type: String,
        // trim: tira os espaços do começo e do fim do texto
        trim: true,
        required: [true, "O nome do item é obrigatório"],
        minlength: [2, "O nome precisa de pelo menos 2 letras"],
    },
    quantidade: {
        type: Number,
        min: [0, "A quantidade não pode ser negativa"],
        default: 1,
    },
}, {
    // timestamps: cria e atualiza sozinho os campos createdAt e updatedAt
    timestamps: true,
});

// Coleção "items"
let Item = mongoose.model("Item", itemSchema);

export default Item;
