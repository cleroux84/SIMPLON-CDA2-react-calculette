import React, { Component } from 'react'
import {connect} from "react-redux";


class Result extends Component {
    render() {
        return (
            <div class='p-5'>
            <h2>Result</h2>
            <span>{this.props.finalResult}</span>
          </div>
        )
    }
}

export default Result;