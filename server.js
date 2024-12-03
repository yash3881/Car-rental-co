const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the view engine
app.set('view engine', 'ejs');


const car= [
  {
    year: 2017,
    name: "2018 Honda Civic",
    price: "12000",
    monthlyRent: "3000",
    image: "/img/car1.jpg"
  },
  {
    year: 2017,
    name: "2018 Hyundai Verna",
    price: "16000",
    monthlyRent: "3200",
    image: "/img/car2.jpg"
  },
  {
    year: 2017,
    name: "2018 Mustang",
    price: "20000",
    monthlyRent: "5000",
    image: "/img/car3.jpg"
  },
  {
    year: 2017,
    name: "2018 Honda City",
    price: "11000",
    monthlyRent: "2800",
    image: "/img/car4.jpg"
  },
  {
    year: 2017,
    name: "2018 Honda WR-V",
    price: "18000",
    monthlyRent: "5000",
    image: "/img/car5.jpg"
  },
  {
    year: 2017,
    name: "2018 Porsche",
    price: "32000",
    monthlyRent: "9000",
    image: "/img/car6.jpg"
  }
];


app.get('/', (req, res) => {
  res.render('index', { cars: cars }); // Passing the car data to the EJS template
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const Car = require('./models/car');
const Review = require('./models/review');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));


const cars = [
  {
    year: 2017,
    name: "2018 Honda Civic",
    price: "₹12000",
    monthlyRent: "₹3000",
    image: "/img/car1.jpg"
  },
  {
    year: 2017,
    name: "2018 Hyundai Verna",
    price: "₹16000",
    monthlyRent: "₹3200",
    image: "/img/car2.jpg"
  },
  {
    year: 2017,
    name: "2018 Mustang",
    price: "₹20000",
    monthlyRent: "₹5000",
    image: "/img/car3.jpg"
  }
];


app.get('/', async (req, res) => {
  
  const carData = await Car.find();
  const reviewData = await Review.find();

  res.render('index', {
    companyName: 'Car Rental Co.',
    cars: carData,
    reviews: reviewData,
  });
});


app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  res.redirect('/');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
