import React from 'react';
import DateComponent from './DateComponent';
import CompanyComponent from './CompanyComponent';
import AccountComponent from './AccountComponent';
import AmountComponent from './AmountComponent';

const BalanceSheetComponent = ({ date, ledger, amount, company, randomKey }) => {
  return (
    <div className="balanceSheetComponent">
      <DateComponent date={date} randomKey={randomKey} />
      <CompanyComponent company={company} randomKey={randomKey} />
      <AccountComponent ledger={ledger} randomKey={randomKey} />
      <AmountComponent amount={amount} randomKey={randomKey} />
    </div>
  );
};

export default BalanceSheetComponent;
