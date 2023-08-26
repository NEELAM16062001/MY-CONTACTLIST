const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList = [
    {
        name: "Rohan Das",
        phone: "0987654321"
    },
    {
        name: "Shubham",
        phone: "9876543210"
    }
]


app.get('/', function (req, res) {
    // console.log(__dirname);
    // res.send('<h1>Hello World</h1>');
    res.render('home', {
        title: "my contact list",
        contact_list: contactList
    });
});
    app.get('/practice', function (req, res) {
        res.render('practice', { title: "lets play with ejs" });
    });
    app.post('/create-contact', function (req, res) {
        contactList.push({
            name: req.body.name,
            phone: req.body.phone
        });
        return res.redirect('/');
    
        
    });

    app.listen(port, function (err) {
        if (err) {
            console.log('Error in running the server:', err);
        }

        console.log('Server is running on port: ', port);
    })
        
