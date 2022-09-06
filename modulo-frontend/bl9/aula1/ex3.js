// callback-errors.js

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      // insira uma `callback` como retorno da função em caso de erro
      callback(errorMessage);
    }
  }, delay());
};

// Deve imprimir:
//  - Em caso de sucesso: "O país retornado é Brasil"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryName, printErrorMessage);

// Deve imprimir:
//  - Em caso de sucesso: "A moeda corrente do Brasil é Real"
//  - Em caso de erro: "Erro ao selecionar país: País não encontrado"
getCountry(countryCurrency, printErrorMessage);