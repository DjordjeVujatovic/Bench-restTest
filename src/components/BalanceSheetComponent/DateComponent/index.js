import React from 'react';

const DateComponent = ({date, ledger, company}) => {
  return (
     <div className="dateComponentContainer">
      <div className="dateDataWrapper">
        <p>{date}</p>
      </div>
     </div>
  );
};

export default DateComponent;