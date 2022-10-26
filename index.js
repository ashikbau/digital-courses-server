const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
// const coursesDetails = require('./data/courseDetail.json');








app.get('/course-categories', (req, res) => {
    res.send(courses)
});
app.get('/courses', (req, res) => {
    res.send(courses)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    
    const course=courses.find(c=>c.id===parseInt(id))
    if(!course) res.status(400).send('this ID is not found')
    else{
        res.send(course)
    }
    
    
    
});




app.get('/', (req, res) => {
    res.send('Courses API Running');
});




app.listen(port, () => {
    console.log('Digital courses Server running on port', port);
})