<template>
    <div id="content">
        <h1>Monty Hall Desafio</h1>
        <div class="form">
            <div class="question" v-if="!started">
                <label for="doorAmount">Número de portas </label>
                <input type="text" id="doorAmount" size="3" 
                v-model.number="doorAmount">
            </div>
            <div class="question" v-if="!started">
                <label for="selectedDoor">Qual será a correta? </label>
                <input type="text" id="selectedDoor" size="3" 
                v-model.number="selectedDoor">
            </div>
            <button v-if="!started" @click="started = true">Start</button>
            <button v-if="started" @click="started = false">Restart</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in doorAmount" v-bind:key="i">
                <OptionDoor :number="i" :hasGift="i == selectedDoor"></OptionDoor>
            </div>
        </div>
    </div>
</template>

<script>
import OptionDoor from './components/OptionDoor.vue';

export default {
    name: 'App',
    components: { OptionDoor },
    data() {
        return {
            started: false,
            doorAmount: 3,
            selectedDoor: 1
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    color: #FFF;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
}

#app,
#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
}

#app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form,
.form input,
.form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.question{
    margin: 1rem 1rem;
}
</style>