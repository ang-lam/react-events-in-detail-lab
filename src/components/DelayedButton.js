// Code DelayedButton Component Here
import React, { Component } from 'react'

export class DelayedButton extends Component {
   handleClick = event => {
       event.persist()
       window.setTimeout(() => {
           this.props.onDelayedClick(event)
       }, this.props.delay)
   }
    
    render() {
        return (
            <button onClick={this.handleClick}>Delayed</button>
        )
    }
}

export default DelayedButton
