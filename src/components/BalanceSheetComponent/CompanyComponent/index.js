import React from 'react';

const CompanyComponent = ({ company }) => {
  return (
    <div className="companyComponentContainer">
      <div className="companyDataWrapper">
        <p>{company}</p>
      </div>
    </div>
  );
};

export default CompanyComponent;
