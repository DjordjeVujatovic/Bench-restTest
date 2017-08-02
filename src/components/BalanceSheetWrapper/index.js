import React from 'react';
import BalanceSheetHeader from '../BalanceSheetHeader';
import BalanceSheetContent from '../BalanceSheetContent';

const BalanceSheetWrapper = () => {
  return (
    <div className="balanceSheetWrapper">
      <BalanceSheetHeader />
      <BalanceSheetContent />
    </div>
  );
};

export default BalanceSheetWrapper;