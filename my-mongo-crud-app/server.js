const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

// Models
const Debtor = require('./models/Debtor');
const Form = require('./models/PdfDetails');
const Contact = require('./models/ContactBack');

const app = express();
const PORT = process.env.PORT || 5010;

// ✅ Middleware
app.use(cors({
  origin: 'https://jressor.onrender.com', // Your Vite frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(helmet());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static('files'));

// MongoDB connection
const mongoUrl = "mongodb+srv://mike96:lilmike800@cluster0.ylle5px.mongodb.net/ReesorEmaildata?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Connection error:", err);
  });

// Email Schema and Model
const emailSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Company: { type: String, required: true }
});


const EmailModel = mongoose.model('Email', emailSchema);


// ✅ Your contact form route
app.post('/api/ContactForm', async (req, res) => {
  const { Name, EmailTwo, TextBox } = req.body;

  if (!Name || !EmailTwo || !TextBox) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContactForm = new Contact({ Name, EmailTwo, TextBox });
    await newContactForm.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to save contact form' });
  }
});

// Get all contact forms
app.get('/api/ContactForm', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch contact forms' });
  }
});





// --- Debtor API ---
app.post('/api/debtor', async (req, res) => {
  const { FirstName, LastName, AmountOwed } = req.body;
  if (!FirstName || !LastName || !AmountOwed) {
    return res.status(400).json({ error: 'All fields (FirstName, LastName, AmountOwed) are required.' });
  }
  try {
    const newDebtor = new Debtor({ FirstName, LastName, AmountOwed });
    await newDebtor.save();

    const allDebtors = await Debtor.find().sort({ AmountOwed: -1 });
    for (let i = 0; i < allDebtors.length; i++) {
      allDebtors[i].Rank = i + 1;
      await allDebtors[i].save();
    }

    res.status(201).json({ message: 'Debtor added and ranked successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to save debtor and rank.' });
  }
});






app.get('/api/debtors', async (req, res) => {
  try {
    const debtors = await Debtor.find().sort({ Rank: 1 });
    res.status(200).json(debtors);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch debtors.' });
  }
});

// --- File Upload API ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './files');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post('/submit-form', upload.single('documentFile'), async (req, res) => {
  const { fullName, companyName, phoneNumber, emailAddress, debtorInfo, additionalDetails } = req.body;
  const documentFile = req.file ? req.file.filename : null;

  try {
    const newForm = await Form.create({
      fullName,
      companyName,
      phoneNumber,
      emailAddress,
      debtorInfo,
      documentFile,
      additionalDetails,
    });
    res.status(200).json({ status: 'Form submitted successfully', form: newForm });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: error.message });
  }
});

app.get('/get-forms', async (req, res) => {
  try {
    const forms = await Form.find({});
    res.status(200).json({ status: 'ok', forms });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error fetching forms' });
  }
});

// --- Misc ---
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use((req, res, next) => {
  console.log(`Request to: ${req.url}`);
  next();
});

// // Serve static files from React build folder if needed
// const buildPath = path.join(__dirname, '../Reesor-Frontend/build');
// app.use(express.static(buildPath));
// app.get(/^\/(?!api).*$/, (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/api/ContactForm`);
});
