import React from 'react';

const CompanyComponent = ({ company, randomKey }) => {
  return (
    <div className="companyComponentContainer">
      <div className="companyDataWrapper">
        <p key={randomKey}>{company}</p>
      </div>
    </div>
  );
};

export default CompanyComponent;
