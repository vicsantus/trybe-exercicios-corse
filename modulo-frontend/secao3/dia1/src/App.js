import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cliques: 0,
      valor: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.gerador = this.gerador.bind(this);
  }

  handleClick() {
    this.setState((atual, _props) => ({
      cliques: atual.cliques + 1,
    }));
  }

  gerador() {
    this.setState((_atual, _props) => ({
      valor: Math.round(Math.random() * 10 - 1) + 1, 
    }));
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe

    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    const { cliques, valor } = this.state;
    const cor = cliques % valor === 0 ? { color: 'green' } : { color: 'red' };
    return (
      <>
        <button type="button" onClick={this.gerador}>
          Gerar numero
        </button>
        <button type="button" onClick={this.handleClick}>
          Clicks!
        </button>
        <p style={cor}>Clicou: {cliques}</p>
      </>
    );
  }
}

export default App;
