const express = require('express');
const app = express();
const saudacao = require('./saudacoaMid');

app.use(saudacao)

app.get('/a', (req, res) => {
    res.json({
        data: [
            {id: 7, name: 'Ana', position: 1 },
            {id: 34, name: 'Bia', position: 2 },
            {id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200
    })
    
    // res.json({
    //     id: 1,
    //     name: "Produto caro",
    //     price: 500.00,
    //     discount: 0.25
    // })

    // res.send('<h1>Ok</h1>')

})

app.listen(3000, () => console.log('On'))