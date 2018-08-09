import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const CurrencyConverter = ( {label, options, chooseCurrencies} ) => {
    return (
      <div className="col">
      <p>{label}</p>
      <Select
        isMulti
        name="currencies"
        options={options}
        onChange={chooseCurrencies}
      />
    </div>
    );
};

CurrencyConverter.propTypes = {
  label: PropTypes.string.isRequired,
  chooseCurrencies: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default CurrencyConverter;