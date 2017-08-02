import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactionData } from '../../redux/actions/balanceSheetActions';
import LoadingComponent from '../../components/LoadingComponent';
import BalanceSheetComponent from '../../components/BalanceSheetComponent';
import BalanceSheetHeader from '../../components/BalanceSheetHeader';

class BalanceSheetContainer extends Component {
  componentDidMount() {
    this.props.fetchTransactionData();
  }
  render() {
    const { isLoading } = this.props;
    const transactionData = this.props.balanceSheet;
    return (
      <div>
        {
          isLoading ?
            <LoadingComponent />
            :
            <div>
              <BalanceSheetHeader />
              {transactionData.map((transaction, key) => (
                <BalanceSheetComponent
                  key={key}
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
});

const mapDispatchToProps = dispatch => ({
  fetchTransactionData: () => {
    dispatch(fetchTransactionData());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BalanceSheetContainer);