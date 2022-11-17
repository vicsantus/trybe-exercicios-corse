// Crie uma aplicação React e implemente um formulário contendo os dados pessoais de uma pessoa estudante da Trybe.
// Os seus componentes precisam ser funcionais e, para gerenciamento do estado, precisam utilizar hooks.

// O formulário deve conter:

//     Input do tipo text contendo o nome completo;
//     Input do tipo number contendo a idade;
//     Input do tipo text contendo a cidade;
//     Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
//     Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.

//     Dica: Utilize o hook useState para gerenciar o estado do seu componente!
import { useState } from "react";

export function Form() {
  const [data, setData] = useState({
    name: '',
    age: 0,
    city: '',
    module: 'Fundamentos',
  });

  const handleChange = ({target}) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };
  
  return (
    <form onChange={handleChange}>
      <input name="name" value={data.name} type="text" placeholder="Nome completo"/>
      <input name="age" value={data.age} type="number" placeholder="Idade"/>
      <input name="city" value={data.city} type="text" placeholder="cidade"/>
      <fieldset name="module">
        <legend>Módulo</legend>
        <input type="radio" name="module" placeholder="Fundamentos" value="Fundamentos"/>
        <input type="radio" name="module" value="Front-end"/>
        <input type="radio" name="module" value="Back-end"/>
        <input type="radio" name="module" value="Ciência da Computação"/>
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  )
}