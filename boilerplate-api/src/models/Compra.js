import mongoose from "mongoose";

let compraSchema = new mongoose.Schema({
    // Subdocumento: quem comprou
    cliente: {
        nome: {
            type: String,
            trim: true,
            required: [true, "O nome do cliente é obrigatório"],
        },
        email: {
            type: String,
            trim: true,
            // lowercase: ANA@Email.com vira ana@email.com
            lowercase: true,
            required: [true, "O e-mail do cliente é obrigatório"],
        },
    },
    // Array de subdocumentos: os jogos comprados
    itens: [
        {
            jogoId: {
                type: String,
                required: [true, "O item precisa do _id do jogo"],
            },
            titulo: {
                type: String,
                trim: true,
                required: [true, "O item precisa do título do jogo"],
            },
            preco: {
                // O preço pago no momento da compra
                type: Number,
                required: [true, "O item precisa do preço"],
                min: [0, "O preço não pode ser negativo"],
            },
        },
    ],
    total: {
        type: Number,
        min: [0, "O total não pode ser negativo"],
        default: 0,
    },
    formaPagamento: {
        type: String,
        required: [true, "A forma de pagamento é obrigatória"],
        enum: {
            values: ["Cartão", "Pix", "Boleto"],
            message: "{VALUE} não é uma forma de pagamento válida",
        },
    },
    status: {
        type: String,
        enum: {
            values: ["Pendente", "Aprovada", "Cancelada", "Reembolsada"],
            message: "{VALUE} não é um status válido",
        },
        default: "Pendente",
    },
}, {
    timestamps: true,
});

// Coleção "compras"
let Compra = mongoose.model("Compra", compraSchema);

export default Compra;
