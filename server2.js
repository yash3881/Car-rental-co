
const express = require('express');
const path = require('path');


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post('/contact', (req, res) => {
    const { name, email, phone, message } = req.body;

    
    console.log('Contact Form Submission:', { name, email, phone, message });

    res.json({ status: 'success', message: 'Thank you for your message!' });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
