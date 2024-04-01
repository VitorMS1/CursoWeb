const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const configStorage = 
{
    destination: function(req, file, callback)
    {
        callback(null, './upload');
    },
    filename: function(req, file, callback)
    {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
}
const multer = require('multer');
const storage = multer.diskStorage(configStorage);
const upload = multer({ storage }).single('arquivo');
app.post('/upload', (req, res) =>
{
    upload(req, res, err => 
    {
        if(err)
        {
            return res.end("Algo deu errado.");
        }

        res.end("Upload realizado com sucesso");
    })
});

app.post('/formulario', (req, resp) => 
{
     resp.send(
        {
            ...req.body,
            id: 1
        });
});

app.get('/evenOrOdd', (req, resp) =>
{
    const evenOrOdd = (parseInt(req.query.number) % 2) === 0;
    resp.send(
        {
            result:  evenOrOdd ? 'par' : 'impar'
        });
})


app.listen(8080, () => console.log('Em execução'));
