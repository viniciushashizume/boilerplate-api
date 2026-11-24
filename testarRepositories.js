import mongoose from "./src/config/conexao.js";
import * as jogoRepository from "./src/repositories/jogoRepository.js";
import * as compraRepository from "./src/repositories/compraRepository.js";
import * as avaliacaoRepository from "./src/repositories/avaliacaoRepository.js";

// Arquivo só para conferir os repositories hoje.
// A partir da aula 3, quem chama os repositories são os services.

// JOGOS
console.log("\n--- salvar: 3 jogos");
let hollow = await jogoRepository.salvar({
    titulo: "Hollow Knight",
    preco: 46.99,
    genero: "Indie",
    desenvolvedora: { nome: "Team Cherry", pais: "Austrália" },
});
let celeste = await jogoRepository.salvar({
    titulo: "Celeste",
    preco: 36.99,
    genero: "Indie",
    desenvolvedora: { nome: "Maddy Makes Games", pais: "Canadá" },
});
let forza = await jogoRepository.salvar({
    titulo: "Forza Horizon 5",
    preco: 249,
    genero: "Corrida",
    desenvolvedora: { nome: "Playground Games", pais: "Reino Unido" },
});
console.log(hollow.titulo, "|", celeste.titulo, "|", forza.titulo);

console.log("\n--- buscarTodos");
let jogos = await jogoRepository.buscarTodos();
console.log(jogos.length, "jogos no catálogo");

console.log("\n--- buscarPorGenero: Indie");
let indies = await jogoRepository.buscarPorGenero("Indie");
indies.forEach((jogo) => {
    console.log(jogo.titulo, "- R$", jogo.preco);
});

console.log("\n--- atualizarPorId: Celeste com 50% de desconto");
let antes = await jogoRepository.atualizarPorId(celeste._id, { desconto: 50 });
console.log("O findByIdAndUpdate devolve o documento ANTES:", antes.desconto);
let depois = await jogoRepository.buscarPorId(celeste._id);
console.log("Buscando de novo:", depois.desconto);

console.log("\n--- buscarPorId: _id que não existe");
let naoExiste = await jogoRepository.buscarPorId("665f1c2e9b1d4a3f8c7e9999");
console.log(naoExiste);

// COMPRAS
console.log("\n--- salvar: compra da Ana");
let compra = await compraRepository.salvar({
    cliente: { nome: "Ana Souza", email: "ana@email.com" },
    itens: [
        { jogoId: hollow._id, titulo: hollow.titulo, preco: hollow.preco },
        { jogoId: celeste._id, titulo: celeste.titulo, preco: 18.5 },
    ],
    formaPagamento: "Pix",
});
console.log("Compra salva:", compra.itens.length, "itens -", compra.status);

console.log("\n--- buscarPorEmailCliente: ana@email.com");
let daAna = await compraRepository.buscarPorEmailCliente("ana@email.com");
console.log(daAna.length, "compra(s)");

console.log("\n--- buscarComprasDoJogo: a Ana comprou o Hollow Knight? E o Forza?");
let comprouHollow = await compraRepository.buscarComprasDoJogo("ana@email.com", hollow._id);
let comprouForza = await compraRepository.buscarComprasDoJogo("ana@email.com", forza._id);
console.log("Hollow Knight:", comprouHollow.length, "| Forza:", comprouForza.length);

// AVALIAÇÕES
console.log("\n--- salvar e buscarPorJogo: avaliações do Hollow Knight");
await avaliacaoRepository.salvar({
    jogo: { id: hollow._id, titulo: hollow.titulo },
    autor: { nome: "Ana Souza" },
    recomendado: true,
    texto: "Exploração incrível e chefes muito bem feitos.",
    horasJogadas: 42,
});
let avaliacoes = await avaliacaoRepository.buscarPorJogo(hollow._id);
avaliacoes.forEach((avaliacao) => {
    console.log(avaliacao.autor.nome, "-", avaliacao.recomendado ? "Recomendado" : "Não recomendado");
});

// REMOVER
console.log("\n--- removerPorId: Forza Horizon 5");
let removido = await jogoRepository.removerPorId(forza._id);
console.log("Removido:", removido.titulo);
let deNovo = await jogoRepository.removerPorId(forza._id);
console.log("Removendo de novo:", deNovo);

console.log("\n--- buscarPorId: _id com formato errado");
try {
    await jogoRepository.buscarPorId("abc");
} catch (erro) {
    console.log("ERRO:", erro.message);
}

// Fecha a conexão para o terminal liberar
await mongoose.disconnect();
