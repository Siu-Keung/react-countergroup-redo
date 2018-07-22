import React, {Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count: props.count};
    }

    onAddButtonClicked = () => {
        let newState = this.state;
        newState.count++;
        this.setState(newState);
    }

    onSubButtonClicked = () => {
        let newState = this.state;
        newState.count--;
        this.setState(newState);
    }

    render(){
        let resultElem = (
            <div>
                <button onClick={this.onAddButtonClicked}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.onSubButtonClicked}>-</button>
            </div>
        );
        return resultElem;
    }
}

export default Counter;