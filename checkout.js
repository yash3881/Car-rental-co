document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    // Simulate a payment request
    const paymentData = {
        cardName: cardName,
        cardNumber: cardNumber,
        expiryDate: expiryDate,
        cvv: cvv,
        amount: amount
    };

    console.log('Payment Data:', JSON.stringify(paymentData));

    // Here you would typically send paymentData to your server
    // For this example, we will just simulate a successful response
    document.getElementById('responseMessage').innerText = 'Payment Successful! Thank you for your purchase.';
});