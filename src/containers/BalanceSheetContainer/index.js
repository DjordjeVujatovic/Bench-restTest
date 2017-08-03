import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const totalAmount = this.props.totalAmount;
    return (
      <div className="balanceSheetContainer">
        {
          isLoading ?
            <LoadingComponent />
            :
            <div className="balanceSheetWrapper">
              <BalanceSheetHeader totalAmount={totalAmount} />
              {transactionData.map((transaction) => (
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
  totalAmount: state.balanceSheetData.totalAmount,
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionData: () => {
    dispatch(fetchTransactionData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BalanceSheetContainer);
