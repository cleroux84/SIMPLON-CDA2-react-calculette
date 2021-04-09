
import React, { Component} from 'react';
import logo from '../logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputNumber from './InputNumber';
import Operation from './Operation';
import Result from './Result';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import calcReducer from '../reducers/calcReducer';
import ButtonComponent from './ButtonComponent';
import {Form, Button} from "react-bootstrap";
import {calculate, updateInput1, updateInput2, changeOperator, generateNumber, updateInput1Withthunk} from '../actions/actions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <section>
            <div class='p-5'>
              <Form>

                <Form.Group>
                  <InputNumber placeholder= 'number 1' onChange={e => this.props.updateInput1(e.target.value)} value={this.props.number1} />
                  
                  <Operation  onChange={e => this.props.changeOperator(e.target.value)} />
    
                  <InputNumber placeholder= 'number 2' onChange={e => this.props.updateInput2(e.target.value)} value={this.props.number2} />

                </Form.Group>
              
    
                <div class= 'd-flex justify-content-center'>
                  <ButtonComponent value='Calcul' onClick= {(this.props.calculate)}/>
                  <ButtonComponent value= 'Random' onClick={this.props.updateInput1Withthunk}/>
                </div>
    
                <Result finalResult={this.props.finalResult}/>

              </Form>
            </div>
            
          </section>
      </header>
    </div>)


  }  
}

const mapStateToProps = (state) => {
  return {
      number1: state.calcReducer.number1,
      number2: state.calcReducer.number2,
      operator: state.calcReducer.operator,
      finalResult: state.calcReducer.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    calculate, 
    updateInput1, 
    updateInput2, 
    changeOperator,
    generateNumber,
    updateInput1Withthunk
  }, dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App)
