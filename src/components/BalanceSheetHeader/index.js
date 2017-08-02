import React from 'react';

const BalanceSheetHeader = () => {
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
          <p>Total</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheetHeader;