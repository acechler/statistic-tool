const express = require('express');
const path = require('path');
const probability_bag  = require('./probability_bag');

/// res.status(200) === Successful HTTP Request
/// res.status(400) === Bad Request

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

// Route to add entry to probability bag
app.post('/add-entry', (req, res) => {
    const {name, value} = req.body;
    if (typeof value === 'number') {
        probability_bag.addEntry(name,value);
        res.status(200).json({message: 'Entry added successfully', items: probability_bag.items});
    } else {
        res.status(400).json({message: 'Value must be a number'});
    }
});


// Route to calculate the product of all values in the bag

app.get('/calculate', (req, res) => {
    const result = {
        product: probability_bag.calc(),
        items: probability_bag.items
    };
    res.status(200).json(result);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});