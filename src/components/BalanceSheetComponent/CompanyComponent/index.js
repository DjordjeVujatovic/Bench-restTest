import React from 'react';
import PropTypes from 'prop-types';

const CompanyComponent = ({ company, randomKey }) => {
  return (
    <div className="companyComponentContainer">
      <div className="companyDataWrapper">
        <p key={randomKey()}>{company}</p>
      </div>
    </div>
  );
};

CompanyComponent.propTypes = {
  company: PropTypes.string.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default CompanyComponent;
