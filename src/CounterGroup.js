import React, {Component} from 'react';
import Counter from './Counter';

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        let countArray = [];
        for (let i = 0; i < props.counterNum; i++)
            countArray.push(0);
        this.state = {counterNum: props.counterNum, sum: 0, countArray};
    }

    onCounterAddButtonClicked = (index) => {
        this.state.sum++;
        this.state.countArray[index]++;
        this.setState(this.state);
    }

    onCounterSubButtonClicked = (index) => {
        this.state.sum--;
        this.state.countArray[index]--;
        this.setState(this.state);
    }

    render() {
        let counterArray = [];
        for (let index = 0; index < this.state.counterNum; index++) {
            counterArray.push(
                <Counter
                    index={index}
                    count={this.state.countArray[index]}
                    onCounterAddButtonClicked={this.onCounterAddButtonClicked}
                    onCounterSubButtonClicked={this.onCounterSubButtonClicked}
                />);
        }
        let resultElem = (
            <div>
                {counterArray}
                <p>总和：{this.state.sum}</p>
            </div>
        );
        return resultElem;
    }

}

export default CounterGroup;