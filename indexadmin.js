// Sample data for cars, bookings, and users
let cars = [];
let bookings = [
    { id: 1, user: "John Doe", car: "Toyota Camry", date: "2023-11-05" },
    { id: 2, user: "Jane Smith", car: "Honda Accord", date: "2023-11-08" }
];
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Add car functionality
document.getElementById("addCarForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const carModel = document.getElementById("carModel").value;
    const carBrand = document.getElementById("carBrand").value;
    const carPrice = document.getElementById("carPrice").value;
    const newCar = { id: Date.now(), model: carModel, brand: carBrand, price: carPrice };
    cars.push(newCar);
    displayCars();
    event.target.reset();
});

// Display car list
function displayCars() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
    cars.forEach(car => {
        const li = document.createElement("li");
        li.textContent = `${car.brand} ${car.model} - $${car.price}/day`;
        carList.appendChild(li);
    });
}

// Display booking list
function displayBookings() {
    const bookingList = document.getElementById("bookingList");
    bookingList.innerHTML = "";
    bookings.forEach(booking => {
        const li = document.createElement("li");
        li.textContent = `${booking.user} booked ${booking.car} on ${booking.date}`;
        bookingList.appendChild(li);
    });
}

// Display user list
function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
}

// Initial display of data
displayCars();
displayBookings();
displayUsers();
