import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    miniDisplayValue: '',
    clearMiniDisplayValue: false,
    continueFlag: false,
    operator: null,
    values: [0, null],
    current: 0,
    recentEqual: false
};


export default class Calculator extends Component {

    state = { ...initialState };

    constructor(props) {
        super(props)
        this.clearInput = this.clearInput.bind(this);
        this.setOperator = this.setOperator.bind(this);
        this.insertDigit = this.insertDigit.bind(this);
        this.clearAll = this.clearAll.bind(this);
    };

    clearAll() {
        this.setState({ ...initialState })
    };

    clearInput() {

        if (this.state.recentEqual) { this.clearAll() }
        else {
            const displayValue = this.state.displayValue.length === 1 ? '0' : this.state.displayValue.slice(0, -1)
            this.setState({ displayValue })
            this.setInValues(this.state.current, displayValue)
        }
    };

    resolve(continueFlag, newOperator) {
        const values = [...this.state.values];
        let result = 0;

        switch (this.state.operator) {
            case "+":
                result = values[0] + values[1];
                break;
            case "-":
                result = values[0] - values[1];
                break;
            case "x":
                result = values[0] * values[1];
                break;
            case "÷":
                result = values[0] / values[1];
                break
            case "%":
                result = (values[0] / 100) * values[1];
        };

        if (continueFlag) {
            const newValue = [result, 0];
            const current = 1;
            const operator = newOperator;
            this.setState({
                miniDisplayValue: `${this.formatValuesMiniDisplay(result)} ${operator}`,
                current, operator, values: newValue
            });
        }
        else {
            const newValue = [0, null];
            const current = 0;
            const operator = null;
            this.setState({
                miniDisplayValue: `${this.formatValuesMiniDisplay(values[0])} ${this.state.operator} ${this.formatValuesMiniDisplay(values[1])} =`,
                clearMiniDisplayValue: true, current, operator, values: newValue, recentEqual: true
            })
        }

        this.setState({ displayValue: result.toString(), clearDisplay: true });
    };

    setOperator(operator) {

        if (this.state.operator === null || this.state.values[1] === null) {

            if (this.state.recentEqual) {
                this.setInValues(this.state.current, this.state.displayValue)
                this.setState({
                    miniDisplayValue: `${this.formatValuesMiniDisplay(this.state.displayValue)} ${operator}`,
                    clearMiniDisplayValue: false,
                    recentEqual: false,
                    current: 1,
                    operator
                })
            }
            else {
                this.setState({ miniDisplayValue: `${this.formatValuesMiniDisplay(this.state.values[0])} ${operator}` });
                if (operator === '=') { return }
                else {
                    this.setState({
                        operator,
                        current: 1,
                        clearDisplay: true,
                        clearMiniDisplayValue: false,
                        recentEqual: false
                    })
                }
            }
        }
        else if (operator === '=' && this.state.values[1] !== null) {
            this.resolve(false)
        }
        else if (this.state.values[1] !== null) {
            this.resolve(true, operator);
        }
        else { return }
    };

    insertDigit(digit) {

        if (digit === ',') { digit = '.' };
        if (digit === '.' && this.state.displayValue.includes('.')) { return }

        const miniDisplayValue = this.state.clearMiniDisplayValue ? '' : this.state.miniDisplayValue;

        const clearDisplay = (this.state.displayValue === '0' && (digit !== '.' || digit === '0')) || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + digit;

        this.setState({ displayValue, clearDisplay: false, miniDisplayValue, clearMiniDisplayValue: false, recentEqual: false })

        if (digit !== '.') {
            this.setInValues(this.state.current, displayValue)
        }
    };

    setInValues(index, value) {
        const values = [...this.state.values];
        values[index] = parseFloat(value);
        this.setState({ values });
    }

    showInMainDisplay() {
        if (this.state.displayValue.length > 10) {
            return `${this.state.displayValue.replace('.', ',').slice(0, 7)}...`;
        }
        else { return this.state.displayValue }
    }

    formatValuesMiniDisplay(value) {
        const miniValue = value.toString();
        if (miniValue.length > 6) {
            return `${miniValue.replace('.', ',').slice(0, 6)}...`;
        }
        else { return miniValue }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={[this.showInMainDisplay(), this.state.miniDisplayValue]}></Display>
                <Button label='CE' click={this.clearInput} operationSecundary></Button>
                <Button label='C' click={this.clearAll} operationSecundary></Button>
                <Button label='%' click={this.setOperator} operationSecundary></Button>
                <Button label='÷' click={this.setOperator} operation></Button>
                <Button label='7' click={this.insertDigit}></Button>
                <Button label='8' click={this.insertDigit}></Button>
                <Button label='9' click={this.insertDigit}></Button>
                <Button label='x' click={this.setOperator} operation></Button>
                <Button label='4' click={this.insertDigit}></Button>
                <Button label='5' click={this.insertDigit}></Button>
                <Button label='6' click={this.insertDigit}></Button>
                <Button label='-' click={this.setOperator} operation></Button>
                <Button label='1' click={this.insertDigit}></Button>
                <Button label='2' click={this.insertDigit}></Button>
                <Button label='3' click={this.insertDigit}></Button>
                <Button label='+' click={this.setOperator} operation></Button>
                <Button label='0' click={this.insertDigit} double='true'></Button>
                <Button label=',' click={this.insertDigit}></Button>
                <Button label='=' click={this.setOperator} operation></Button>
            </div>
        )
    }
}