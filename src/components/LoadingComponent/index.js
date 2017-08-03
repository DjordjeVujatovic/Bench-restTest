import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="loadingComponentContainer">
      <div className="lds-css ng-scope">
        <div className="lds-cube">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
