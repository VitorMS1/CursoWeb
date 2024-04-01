<template>
    <div class="calculator">
        <DisplayComponent :value="showValues" />
        <ButtonComponent label="CE" operationSecundary="true" @onClick="clearInput" />
        <ButtonComponent label="C" operationSecundary="true" @onClick="clearAll" />
        <ButtonComponent label="%" operationSecundary="true" @onClick="setOperator" />
        <ButtonComponent label="÷" operation="true" @onClick="setOperator" />
        <ButtonComponent label="7" @onClick="insertDigit" />
        <ButtonComponent label="8" @onClick="insertDigit" />
        <ButtonComponent label="9" @onClick="insertDigit" />
        <ButtonComponent label="x" operation="true" @onClick="setOperator" />
        <ButtonComponent label="4" @onClick="insertDigit" />
        <ButtonComponent label="5" @onClick="insertDigit" />
        <ButtonComponent label="6" @onClick="insertDigit" />
        <ButtonComponent label="-" operation="true" @onClick="setOperator" />
        <ButtonComponent label="1" @onClick="insertDigit" />
        <ButtonComponent label="2" @onClick="insertDigit" />
        <ButtonComponent label="3" @onClick="insertDigit" />
        <ButtonComponent label="+" operation="true" @onClick="setOperator" />
        <ButtonComponent label="0" double="true" @onClick="insertDigit" />
        <ButtonComponent label="," @onClick="insertDigit" />
        <ButtonComponent label="=" operation="true" @onClick="setOperator" />
    </div>
</template>

<script>
import DisplayComponent from "../components/DisplayComponent.vue";
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
    components: { DisplayComponent, ButtonComponent },
    data() {
        return {
            showValues: { mainDisplay: '0', miniDisplay: '' },
            displayValue: '0',
            clearDisplay: false,
            clearMiniDisplayValue: false,
            continueFlag: false,
            operator: null,
            values: [0, null],
            current: 0,
            recentEqual: false
        }
    },
    methods: {
        clearInput() {
            if (this.recentEqual) { this.clearAll() }
            else {
                const displayValue = this.displayValue.length === 1 ? '0' : this.displayValue.slice(0, -1)
                this.displayValue = displayValue
                this.showValues.mainDisplay = this.formatValuesMainDisplay(displayValue)
                this.setInValues(this.current, displayValue)
            }
        },
        clearAll() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperator(operator) {
            if (this.operator === null || this.values[1] === null) {
                if (this.recentEqual) {
                    console.log('entrou recentEqual', this.displayValue)
                    this.setInValues(this.current, this.displayValue);
                    this.showValues.miniDisplay = `${this.formatValuesMiniDisplay(this.displayValue)} ${operator}`;
                    this.recentEqual = false;
                    this.clearMiniDisplayValue = false;
                    this.current = 1;
                    this.operator = operator;
                }
                else {
                    this.showValues.miniDisplay = `${this.formatValuesMiniDisplay(this.values[0])} ${operator}`
                    if (operator === '=') { return }
                    else {
                        this.operator = operator
                        this.current = 1
                        this.clearDisplay = true
                        this.clearMiniDisplayValue = false
                        this.recentEqual = false
                    }
                }
            }
            else if (operator === '=' && this.values[1] !== null) {
                this.resolve(false)
            }
            else if (this.values[1] !== null) {
                this.resolve(true, operator)
            }
            else { return }
        },
        insertDigit(digit) {

            if (digit === ',') { digit = '.' }
            if (digit === '.' && this.displayValue.includes('.')) { return }

            const miniDisplayValue = this.clearMiniDisplayValue ? '' : this.showValues.miniDisplay

            const clearDisplay = (this.displayValue === '0' && (digit !== '.' || digit === '0')) || this.clearDisplay
            const currentValue = clearDisplay ? '' : this.displayValue
            const displayValue = currentValue + digit

            this.displayValue = displayValue
            this.showValues.miniDisplay = miniDisplayValue
            this.showValues.mainDisplay = this.formatValuesMainDisplay(displayValue)
            this.clearDisplay = false
            this.clearMiniDisplayValue = false
            this.recentEqual = false

            if (digit !== '.') {
                this.setInValues(this.current, displayValue)
            }
        },

        setInValues(index, value) {
            const values = [...this.values]
            values[index] = parseFloat(value)
            this.values = values
        },
        formatValuesMiniDisplay(value) {
            const miniValue = value.toString()
            if (miniValue.length > 6) {
                return `${miniValue.replace('.', ',').slice(0, 6)}...`
            }
            else { return miniValue }
        },
        formatValuesMainDisplay(value) {
            if (value.length > 10) {
                return `${value.replace('.', ',').slice(0, 7)}...`
            }
            else { return value }
        },
        resolve(continueFlag, newOperator) {
            console.log(this.operator)
            const values = [...this.values]
            let result = 0

            switch (this.operator) {
                case "+":
                    result = values[0] + values[1]
                    break
                case "-":
                    result = values[0] - values[1]
                    break
                case "x":
                    result = values[0] * values[1]
                    break
                case "÷":
                    result = values[0] / values[1]
                    break
                case "%":
                    result = (values[0] / 100) * values[1]
            }

            if (continueFlag) {
                this.current = 1
                this.operator = newOperator
                this.values = [result, 0]
                this.showValues.mainDisplay = this.formatValuesMainDisplay(result)
                this.showValues.miniDisplay = `${this.formatValuesMiniDisplay(result)} ${newOperator}`
            }
            else {
                this.showValues.mainDisplay = this.formatValuesMainDisplay(result)
                this.showValues.miniDisplay = `${this.formatValuesMiniDisplay(values[0])} ${this.operator} ${this.formatValuesMiniDisplay(values[1])} =`
                this.current = 0
                this.operator = null
                this.values = [0, null]
                this.clearMiniDisplayValue = true
                this.recentEqual = true
            }

            this.displayValue = result.toString()
            this.clearDisplay = true
        }
    }
}
</script>

<style>
.calculator {
    height: 350px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 46px 46px 46px 46px 46px;
}
</style>