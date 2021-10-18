import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectInput from './SelectInput';

class FormDespesa extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: 0,
      descricao: '',
      moeda: '',
      pagamentos: '',
      tag: '',
      arrayPagamentos: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
      arrayTags: ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, descricao, moeda, pagamentos,
      tag, arrayPagamentos, arrayTags } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            nameInput="Valor"
            type="number"
            id="valor"
            onChange={ this.handleChange }
            value={ valor }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            nameInput="Descrição"
            id="descricao"
            type="text"
            onChange={ this.handleChange }
            value={ descricao }
          />
        </label>
        <SelectInput
          nameInput="Moeda"
          id="moeda"
          onChange={ this.handleChange }
          value={ moeda }
          array={ currencies }
        />
        <SelectInput
          nameInput="Método de pagamento"
          id="pagamentos"
          array={ arrayPagamentos }
          onChange={ this.handleChange }
          value={ pagamentos }
        />
        <SelectInput
          nameInput="Tag"
          id="tag"
          array={ arrayTags }
          onChange={ this.handleChange }
          value={ tag }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });

// const mapDispatchToProps = (dispatch) => ({
//   addExpense: (data) => dispatch(addExpense(data)),
// });

FormDespesa.propTypes = {
  currencies: propTypes.arrayOf(String).isRequired,
};

export default connect(mapStateToProps, null)(FormDespesa);
