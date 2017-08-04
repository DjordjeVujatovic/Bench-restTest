import React from 'react';
import PropTypes from 'prop-types';
import { dateConverter } from '../../../HelperFunctions/';

const DateComponent = ({ date, randomKey }) => {
  return (
    <div className="dateComponentContainer">
      <div className="dateDataWrapper">
        <p key={randomKey()}>{dateConverter(date)}</p>
      </div>
    </div>
  );
};

DateComponent.propTypes = {
  date: PropTypes.string.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default DateComponent;

