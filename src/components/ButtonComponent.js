import React, {Component } from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";



import {Button} from "react-bootstrap";


class ButtonComponent extends Component {
    render() {
        return (
            <div><Button type='button' onClick={this.props.onClick} class="ml-2" variant="outline-info">{this.props.value}</Button>{'    '}</div>
        )
    }
}

export default ButtonComponent;


/*const mapStateToProps = (state) => {
    console.log(state);
    return {
        number1: state.resultReducer.number1,
        operator: state.operationReducer.operator,
        number2: state.resultReducer.number2,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        calculateResult
    }, dispatch)
  }
    
  export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent)*/
  