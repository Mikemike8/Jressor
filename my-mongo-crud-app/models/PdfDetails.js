const mongoose = require('mongoose');

const formSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      match: /.+\@.+\..+/i, // Email validation regex
    },
    debtorInfo: {
      type: String,
      required: true,
    },
    // Storing the document URL or filename (assuming you're storing it in the file system or a cloud service like AWS S3)
    documentFile: {
      type: String, // You can use this to store the file path or URL
      required: true,
    },
    additionalDetails: {
      type: String,
      required: false,
    },
    processTimeline: {
      type: [String], // An array to store the different steps in the process timeline
      default: [
        "Submission review within 24 business hours",
        "Case evaluation by our legal team",
        "Recovery process initiation with your approval"
      ]
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const Form = mongoose.model('PDfDebtors', formSchema);

module.exports = Form;
