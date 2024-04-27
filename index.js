import fs from 'fs';    // fs = File System para leitura e criação de arquivos
import chalk from 'chalk';   // O primeiro nome "Chalk" se comporta como uma variável

function trataErro (erro) {
    throw new Error (chalk.red(erro.code, "Não há arquivo no diretório informado"))
}   // trataErro vai informar o código e  mensagem de erro personalizada

function pegaArquivo (caminhoDoArquivo, texto) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding) 
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro);
}
pegaArquivo ('./arquivos/texto.md')


/*
function pegaArquivo (caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro,texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
} */

