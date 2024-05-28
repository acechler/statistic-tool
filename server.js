const express = require('express');
const path = require('path');
const probability_bag = require('./probability_bag'); // Import the probability_bag object

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to add an entry to the probability_bag
app.post('/add-entry', (req, res) => {
    const { name, value } = req.body;
    if (typeof value === 'number') {
        probability_bag.addEntry(name, value);
        res.status(200).json({ message: 'Entry added successfully', items: probability_bag.items });
    } else {
        res.status(400).json({ message: 'Value must be a number' });
    }
});

// Route to calculate the product of all values in the probability_bag
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
