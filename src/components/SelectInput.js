import React from 'react';
import propTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { name, array, onChange, value } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <select name={ name } id={ name } value={ value } onChange={ onChange }>
          {array && array.map((arr, ind) => (
            <option key={ ind }>
              {
                arr
              }
            </option>))}
        </select>
      </label>
    );
  }
}

SelectInput.propTypes = {
  name: propTypes.string.isRequired,
  array: propTypes.arrayOf(String).isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

export default SelectInput;
