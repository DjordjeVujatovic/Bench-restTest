import React from 'react';
import { integerToDollar } from '../../../HelperFunctions';

const AmountComponent = ({amount}) => {
  return (
    <div className="amountComponentContainer">
      <div className="amountDataWrapper">
        {
          amount < 0 ?
          <div className="negativeIntegers">
            <p>{integerToDollar(amount)}</p>
          </div>
          :
          <div className="positiveIntegers">
            <p>{integerToDollar(amount)}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default AmountComponent;