import React from 'react';
import PropTypes from 'prop-types';

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

AccountComponent.propTypes = {
  ledger: PropTypes.string.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default AccountComponent;
