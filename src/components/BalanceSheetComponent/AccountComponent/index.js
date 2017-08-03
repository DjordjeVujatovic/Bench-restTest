import React from 'react';

const AccountComponent = ({ ledger }) => {
  return (
    <div className="accountComponentContainer">
      <div className="accountDataWrapper">
        {ledger !== '' ?
          <p>{ledger}</p>
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
