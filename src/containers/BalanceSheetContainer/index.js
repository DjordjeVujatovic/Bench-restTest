import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTransactionData } from '../../redux/actions/balanceSheetActions';
import LoadingComponent from '../../components/LoadingComponent';
import BalanceSheetComponent from '../../components/BalanceSheetComponent';
import BalanceSheetHeader from '../../components/BalanceSheetHeader';
import { randomKey } from '../../HelperFunctions';

class BalanceSheetContainer extends Component {
  componentDidMount() {
    this.props.fetchTransactionData();
  }
  render() {
    const { isLoading } = this.props;
    const transactionData = this.props.balanceSheet;
    const totalBalance = this.props.totalBalance;
    return (
      <div className="balanceSheetContainer">
        {
          isLoading ?
            <LoadingComponent />
            :
            <div className="balanceSheetWrapper">
              <BalanceSheetHeader randomKey={randomKey} totalBalance={totalBalance} />
              {transactionData.map(transaction => (
                <BalanceSheetComponent
                  randomKey={randomKey}
                  date={transaction.date}
                  ledger={transaction.ledger}
                  amount={transaction.amount}
                  company={transaction.company}
                />
              ))}
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.balanceSheetData.isLoading,
  balanceSheet: state.balanceSheetData.data,
  totalBalance: state.balanceSheetData.totalBalance,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionData: () => {
    dispatch(fetchTransactionData());
  },
});

BalanceSheetContainer.propTypes = {
  fetchTransactionData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BalanceSheetContainer);
