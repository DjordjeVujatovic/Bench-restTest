import React from 'react';
import PropTypes from 'prop-types';
import DateComponent from './DateComponent';
import CompanyComponent from './CompanyComponent';
import AccountComponent from './AccountComponent';
import AmountComponent from './AmountComponent';

const BalanceSheetComponent = ({ date, ledger, amount, company, randomKey }) => {
  return (
    <div key={randomKey} className="balanceSheetComponent">
      <DateComponent date={date} randomKey={randomKey} />
      <CompanyComponent company={company} randomKey={randomKey} />
      <AccountComponent ledger={ledger} randomKey={randomKey} />
      <AmountComponent amount={amount} randomKey={randomKey} />
    </div>
  );
};

BalanceSheetComponent.propTypes = {
  date: PropTypes.string.isRequired,
  ledger: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default BalanceSheetComponent;
