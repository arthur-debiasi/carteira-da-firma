import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import EditWalletForm from '../components/EditWalletForm';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    const { editor } = this.props;
    return (
      <div>
        <Header />
        { !editor ? <WalletForm /> : <EditWalletForm /> }
        <Table />
      </div>
    );
  }
}

Wallet.propTypes = {
  editor: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  editor: state.wallet.editor,
});

export default connect(mapStateToProps)(Wallet);
