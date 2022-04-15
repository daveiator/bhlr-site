const express = require('express');
const {readFile} = require('fs');


const app = express();

app.get('/', (req, res) => {

    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Error');
        }

        res.send(html);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});