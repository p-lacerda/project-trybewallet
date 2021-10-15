import React from 'react';

class FormDespesa extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     valor: 0,
  //     descricao: '',
  //     moeda: '',
  //     pagamentos: '',
  //     tag: '',
  //   };

  //   // this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            type="number"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            type="text"
            id="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select
            name="moeda"
            id="moeda"
          >
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="pagamentos">
          Método de pagamento
          <select name="pagamentos" id="pagamentos">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormDespesa;
