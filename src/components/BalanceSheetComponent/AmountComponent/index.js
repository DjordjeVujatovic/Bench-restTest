import React from 'react';

const AmountComponent = ({amount}) => {
  return (
    <div className="amountComponentContainer">
      <div className="amountDataWrapper">
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default AmountComponent;