import React from 'react';
import { integerToDollar } from '../../../HelperFunctions';

const AmountComponent = ({amount}) => {
  return (
    <div className="amountComponentContainer">
      <div className="amountDataWrapper">
        <p>{integerToDollar(amount)}</p>
      </div>
    </div>
  );
};

export default AmountComponent;