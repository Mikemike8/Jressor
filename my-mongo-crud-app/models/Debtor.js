const mongoose = require('mongoose'); 
const debtorSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  AmountOwed: { type: Number, required: true },
  Rank: { type: Number, default: 0 },  // Rank based on AmountOwed
  lastUpdated: { type: Date, default: Date.now }
});

// Create a model for Debtors
const Debtor = mongoose.model('Debtor', debtorSchema);

module.exports = Debtor;

