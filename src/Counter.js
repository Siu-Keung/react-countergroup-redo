import React, {Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props);
    }

    onAddButtonClicked = (index) => {
        this.props.onCounterAddButtonClicked(index);
    }

    onSubButtonClicked = (index) => {
        this.props.onCounterSubButtonClicked(index);
    }

    render(){
        let resultElem = (
            <div>
                <button onClick={this.onAddButtonClicked.bind(this, this.props.index)}>+</button>
                <span>{this.props.count}</span>
                <button onClick={this.onSubButtonClicked.bind(this, this.props.index)}>-</button>
            </div>
        );
        return resultElem;
    }
}

export default Counter;