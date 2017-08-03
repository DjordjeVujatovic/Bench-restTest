import React from 'react';

const AccountComponent = ({ ledger, randomKey }) => {
  return (
    <div className="accountComponentContainer">
      <div className="accountDataWrapper">
        {ledger !== '' ?
          <p key={randomKey()}>{ledger}</p>
          :
          <div className="emptyLedger">
            <p>Nothing to see here!</p>
          </div>
        }
      </div>
    </div>
  );
};

export default AccountComponent;
