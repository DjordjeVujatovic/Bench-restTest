import React from 'react';

const AccountComponent = ({ledger}) => {
  return (
    <div className="accountComponentContainer">
      <div className="accountDataWrapper">
        <p>{ledger}</p>
      </div>
    </div>
  );
};

export default AccountComponent;