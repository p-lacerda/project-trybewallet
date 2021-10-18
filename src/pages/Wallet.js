import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPI } from '../actions';
import FormDespesa from '../components/FormDespesa';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { loadCurr } = this.props;
    loadCurr();
  }

  render() {
    return (
      <section>
        <Header />
        <FormDespesa />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadCurr: (data) => dispatch(fetchAPI(data)),
});

Wallet.propTypes = {
  loadCurr: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
