
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for users and rentals
let users = [];
let rentals = [];

// Sign Up endpoint
app.post('/api/signup', (req, res) => {
    const { firstName, lastName, phoneNumber, emailId, password } = req.body;
    
    // Check if user already exists
    const existingUser  = users.find(user => user.emailId === emailId);
    if (existingUser ) {
        return res.status(400).json({ message: 'User  already exists' });
    }

    // Create new user
    const newUser  = { firstName, lastName, phoneNumber, emailId, password };
    users.push(newUser );
    res.status(201).json({ message: 'User  registered successfully' });
});

// Sign In endpoint
app.post('/api/signin', (req, res) => {
    const { emailId, password } = req.body;

    // Check if user exists
    const user = users.find(user => user.emailId === emailId && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Sign in successful', user });
});

// Endpoint to handle car rental requests
app.post('/api/rent', (req, res) => {
    const { location, pickupDate, returnDate, carId } = req.body;

    // Create a rental request
    const rentalRequest = { location, pickupDate, returnDate, carId };
    rentals.push(rentalRequest);
    res.status(201).json({ message: 'Rental request submitted successfully', rentalRequest });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
node server.js
// Example of a signup function using fetch
async function signup() {
    const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstName: 'John',
            lastName: 'Doe',
            phoneNumber: '1234567890',
            emailId: 'john.doe@example.com',
            password: 'password123',
        }),
    });

    const data = await response.json();
    console.log(data);
}
          // Add a fade-in animation when the elements appear on scroll
document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    boxes.forEach(box => observer.observe(box));
});
                 
