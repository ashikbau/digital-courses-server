const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/course-categories', (req, res) => {
    res.send(courses)
});



app.get('/', (req, res) => {
    res.send('News API Running');
});


app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})