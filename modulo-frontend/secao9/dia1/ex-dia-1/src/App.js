import './App.css';
import { Form } from './Form';

function App() {
  // Crie uma aplicação React e implemente um formulário contendo os dados pessoais de uma pessoa estudante da Trybe.
  // Os seus componentes precisam ser funcionais e, para gerenciamento do estado, precisam utilizar hooks.

  // O formulário deve conter:

  //     Input do tipo text contendo o nome completo;
  //     Input do tipo number contendo a idade;
  //     Input do tipo text contendo a cidade;
  //     Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
  //     Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.

  //     Dica: Utilize o hook useState para gerenciar o estado do seu componente!
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
