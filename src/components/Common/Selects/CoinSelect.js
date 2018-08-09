import React from "react";
import PropTypes from "prop-types";
import Select, { createFilter } from "react-select";

const CoinSelect = ( {options, chooseCoin, label} ) => {
    return (
      <div className="col">
        <p>{label}</p>
        <Select 
          isClearable
          isSearchable
          name="coins"
          options={options}
          filterOption={createFilter(false, false, false, false)}
          onChange={chooseCoin}
        />          
      </div>
    );
};

CoinSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  chooseCoin: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default CoinSelect;