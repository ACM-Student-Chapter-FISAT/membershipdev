const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://acmfisat24:adYBOO62k9wAtgNB@test.o3i3a.mongodb.net/?retryWrites=true&w=majority&appName=Test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Membership Schema
const membershipSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address:String,
    city:String,
    pincode:String,
    year: String,
});

const Membership = mongoose.model('Membership', membershipSchema);

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/payment.html');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const newMember = new Membership({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        address:req.body.address,
         city:req.body.city,
          pincode:req.body.pincode,

        year: req.body.year
    });

    newMember.save()
        .then(() => res.send('Membership registered successfully!'))
        
        .catch(err => res.status(400).send('Error saving membership data'));
    
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 