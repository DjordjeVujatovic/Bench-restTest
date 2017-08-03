import React from 'react';
import { integerToDollar } from '../../HelperFunctions';

const BalanceSheetHeader = ({totalAmount}) => {
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
          <p>{integerToDollar(totalAmount)}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheetHeader;