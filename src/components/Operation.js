import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap";

class Operation extends Component {

    operations = [
        {id:1 , name:"additionner", sigle:'+' },
        {id:2 , name:"Soustraire", sigle: '-' },
        {id:3 , name:"Multiplier", sigle: '*' },
        {id:4 , name:"Diviser", sigle: '/' },

    ]
    render() {
        return (
            <Form.Control as="select" onChange={this.props.onChange}>
                <option value=''>Opérateurs</option>
                {this.operations.map(operation => <option value= {operation.sigle}>{operation.sigle}</option>)}
            </Form.Control>
        )
    }
}

export default Operation;