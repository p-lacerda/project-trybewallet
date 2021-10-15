import React from 'react';
import FormDespesa from '../components/FormDespesa';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <FormDespesa />
      </section>
    );
  }
}

export default Wallet;
