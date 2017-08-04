import React from 'react';

const AccountComponent = ({ ledger, randomKey }) => {
  return (
    <div className="accountComponentContainer">
      <div className="accountDataWrapper">
        {ledger !== '' ?
          <p key={randomKey()}>{ledger}</p>
          :
          <div className="emptyLedger">
            <p>Please fill in account information. Thank you.</p>
          </div>
        }
      </div>
    </div>
  );
};

export default AccountComponent;
