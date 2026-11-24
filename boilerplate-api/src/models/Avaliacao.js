import mongoose from "mongoose";

let avaliacaoSchema = new mongoose.Schema({
    // Subdocumento: qual jogo foi avaliado
    jogo: {
        id: {
            type: String,
            required: [true, "Informe o _id do jogo avaliado"],
        },
        titulo: {
            type: String,
            trim: true,
            required: [true, "Informe o título do jogo avaliado"],
        },
    },
    // Subdocumento: quem escreveu
    autor: {
        nome: {
            type: String,
            trim: true,
            required: [true, "O nome do autor é obrigatório"],
        },
    },
    recomendado: {
        // true: "Recomendado" / false: "Não recomendado"
        type: Boolean,
        required: [true, "Informe se você recomenda o jogo"],
    },
    texto: {
        type: String,
        trim: true,
        required: [true, "O texto da avaliação é obrigatório"],
        minlength: [10, "A avaliação precisa de pelo menos 10 caracteres"],
        maxlength: [1000, "A avaliação pode ter no máximo 1000 caracteres"],
    },
    horasJogadas: {
        type: Number,
        min: [0, "As horas jogadas não podem ser negativas"],
        default: 0,
    },
}, {
    timestamps: true,
});

// Coleção "avaliacoes"
let Avaliacao = mongoose.model("Avaliacao", avaliacaoSchema);

export default Avaliacao;
