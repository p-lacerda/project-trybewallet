import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { email }
        </span>
        <span data-testid="total-field"> 0 </span>
        <span data-testid="header-currency-field"> BRL </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: propTypes.objectOf(propTypes.any).isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, null)(Header);
