const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

let annotations = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-annotation', (req, res) => {
    console.log('Annotation Received:', req.body);
    annotations.push(req.body);
    res.status(200).send('Annotation received successfully');
});

app.get('/annotations', (req, res) => {
    res.json(annotations);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});