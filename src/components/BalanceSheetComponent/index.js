import React from 'react';
import DateComponent from './DateComponent';
import CompanyComponent from './CompanyComponent';
import AccountComponent from './AccountComponent';
import AmountComponent from './AmountComponent';

const BalanceSheetComponent = ({ date, ledger, amount, company }) => {
  return (
    <div className="balanceSheetComponent">
      <DateComponent date={date} />
      <CompanyComponent company={company} />
      <AccountComponent ledger={ledger} />
      <AmountComponent amount={amount} />
    </div>
  );
};

export default BalanceSheetComponent;
