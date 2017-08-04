import React from 'react';
import PropTypes from 'prop-types';
import { integerToDollar } from '../../HelperFunctions';

const BalanceSheetHeader = ({ totalAmount, randomKey }) => {
  return (
    <div className="balanceSheetHeaderContainer">
      <div className="date">
        <div>
          <p>Date</p>
        </div>
      </div>
      <div className="company">
        <div>
          <p>Company</p>
        </div>
      </div>
      <div className="account">
        <div>
          <p>Account</p>
        </div>
      </div>
      <div className="total">
        <div>
          {totalAmount > 0 ?
            <p key={randomKey()}>{integerToDollar(totalAmount)}</p>
            :
            <p key={randomKey()} className="amountTotalNegative">{integerToDollar(totalAmount)}</p>
          }
        </div>
      </div>
    </div>
  );
};

BalanceSheetHeader.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default BalanceSheetHeader;
