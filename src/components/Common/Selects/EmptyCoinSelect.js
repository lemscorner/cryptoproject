import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const CoinSelect = ( {label} ) => {
    return (
      <div className="col">
        <p>{label}</p>
        <Select 
          isClearable
          isSearchable
          name="coins"
        />          
      </div>
    );
};

CoinSelect.propTypes = {
  label: PropTypes.string.isRequired
}

export default CoinSelect;