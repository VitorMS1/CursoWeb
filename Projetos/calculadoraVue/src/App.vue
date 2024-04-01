<template>
    <div id="content">
        <h1>Calculadora <span class="titleDetail">VUE</span></h1>
        <CalculatorVue />
    </div>
</template>

<script>
import CalculatorVue from './app/calculatorContent.vue'

export default {
    components: { CalculatorVue }
}
</script>

<style>
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}
@font-face {
    font-family: "Righteous";
    src: url("./fonts/Righteous-Regular.ttf");
}

* {
    font-family: 'RobotoMono', monospace;
}

.titleDetail {
    font-family: "Righteous";
}

body {
    margin: 0;
}

#app {
    display: flex;
    justify-content: center;
    height: 100vh;
    color: #fff;
    background: linear-gradient(to right, rgb(204, 51, 173), rgb(51, 51, 153)) !important;
}

#content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>