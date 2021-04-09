import React, { Component } from 'react'
import {Form, Button} from "react-bootstrap";

export class InputNumber extends Component {
    render() {
        return (
            <Form.Control type="number" placeholder={this.props.placeholder} onChange={this.props.onChange} value={this.props.value}/>
        )   
    }
}

export default InputNumber;
