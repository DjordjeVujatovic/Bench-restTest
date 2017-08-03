import React from 'react';
import { integerToDollar } from '../../../HelperFunctions';

const AmountComponent = ({ amount, randomKey }) => {
  return (
    <div className="amountComponentContainer">
      <div className="amountDataWrapper">
        {
          amount < 0 ?
            <div className="negativeIntegers">
              <p key={randomKey}>{integerToDollar(amount)}</p>
            </div>
            :
            <div className="positiveIntegers">
              <p key={randomKey}>{integerToDollar(amount)}</p>
            </div>
        }
      </div>
    </div>
  );
};

export default AmountComponent;
