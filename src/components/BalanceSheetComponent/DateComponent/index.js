import React from 'react';
import { dateConverter } from '../../../HelperFunctions/';

const DateComponent = ({date, ledger, company}) => {
  return (
     <div className="dateComponentContainer">
      <div className="dateDataWrapper">
        <p>{dateConverter(date)}</p>
      </div>
     </div>
  );
};

export default DateComponent;