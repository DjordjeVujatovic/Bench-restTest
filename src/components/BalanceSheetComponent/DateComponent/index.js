import React from 'react';
import { dateConverter } from '../../../HelperFunctions/';

const DateComponent = ({ date, randomKey }) => {
  return (
    <div className="dateComponentContainer">
      <div className="dateDataWrapper">
        <p key={randomKey}>{dateConverter(date)}</p>
      </div>
    </div>
  );
};

export default DateComponent;

