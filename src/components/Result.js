import React, { Component } from 'react'

class Result extends Component {
    render() {
        return (
            <div class='p-5'>
                <h2>{this.props.finalResult}</h2>
            </div>
        )
    }
}

export default Result;