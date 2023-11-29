const schedule = require('node-schedule'); //Importando schedule;

 schedule.scheduleJob('/5 * * * * *', function () {
    console.log("Tarefa 01 executada no segundo: ", new Date().getSeconds())
 })
