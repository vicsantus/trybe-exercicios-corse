const readline = require('readline-sync');
const fs = require('fs').promises;

async function main() {
  try {
    const texto = readline.question('Digite seu texto: ');
    await fs.writeFile('./meu-arquivo.txt', texto);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()