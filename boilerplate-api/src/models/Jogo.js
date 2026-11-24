import mongoose from "mongoose";

let jogoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        // trim: tira os espaços do começo e do fim
        trim: true,
        required: [true, "O título do jogo é obrigatório"],
        minlength: [2, "O título precisa de pelo menos 2 caracteres"],
    },
    descricao: {
        type: String,
        trim: true,
        maxlength: [500, "A descrição pode ter no máximo 500 caracteres"],
    },
    preco: {
        type: Number,
        required: [true, "O preço é obrigatório"],
        // 0: jogo gratuito
        min: [0, "O preço não pode ser negativo"],
    },
    desconto: {
        // Porcentagem: 25 = 25% de desconto
        type: Number,
        min: [0, "O desconto não pode ser negativo"],
        max: [90, "O desconto máximo é de 90%"],
        default: 0,
    },
    genero: {
        type: String,
        required: [true, "O gênero é obrigatório"],
        enum: {
            values: ["Ação", "Aventura", "RPG", "Estratégia", "Esporte", "Corrida", "Simulação", "Terror", "Indie"],
            message: "{VALUE} não é um gênero válido",
        },
    },
    classificacao: {
        // Classificação indicativa
        type: String,
        enum: {
            values: ["Livre", "10", "12", "14", "16", "18"],
            message: "{VALUE} não é uma classificação válida",
        },
        default: "Livre",
    },
    // Subdocumento: UM objeto dentro do jogo
    desenvolvedora: {
        nome: {
            type: String,
            trim: true,
            required: [true, "O nome da desenvolvedora é obrigatório"],
        },
        pais: {
            type: String,
            trim: true,
        },
    },
    ativo: {
        // false: o jogo saiu da loja, mas continua no banco
        type: Boolean,
        default: true,
    },
}, {
    // timestamps: cria sozinho o createdAt e o updatedAt
    timestamps: true,
});

// Coleção "jogos"
let Jogo = mongoose.model("Jogo", jogoSchema);

export default Jogo;
