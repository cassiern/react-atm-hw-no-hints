import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    }
    this.focusTextInput = () => {
      if(this.textInput) this.textInput.focus();
    }
    this.state = {
    balance: 0
  }
}
depositMoney = (e) => {
  console.log(this.textInput.value, 'this.textInput')
  this.setState({
      balance: this.state.balance + parseInt(this.textInput.value)
  })
}
withdrawMoney = (e) => {
  this.setState({
    balance: this.state.balance - parseInt(this.textInput.value)
  })
}



  render() {
const isZero = this.state.balance <= 0 ? 'balance zero' : 'balance';
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={isZero}>{this.state.balance}</div>
          <input type="text" ref={this.setTextInputRef} placeholder="enter an amount"/>
          <input type="button" value="Deposit" onClick={this.depositMoney}/>
          <input type="button" value="Withdraw" onClick={this.withdrawMoney} />

      </div>
    )
  }
}

export default Account;
