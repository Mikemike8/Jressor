import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import "./place.css";
import ImageBlur from "../assets/gradient.png"
const Place = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentUrl, setDocumentUrl] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
  });
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file);
    setUploadStatus(file ? 'File selected, ready to upload.' : 'No file selected.');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus('Preparing to upload...');

    if (!selectedFile) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    if (!formData.fullName || !formData.companyName) {
      setUploadStatus('Please fill in all required fields (Full Name and Company Name).');
      return;
    }
const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const formDataToUpload = new FormData();
    formDataToUpload.append('file', selectedFile);
    formDataToUpload.append('upload_preset', uploadPreset);
  
// Structured metadata (exact keys must match what you've defined in Cloudinary UI)
formDataToUpload.append('metadata', `fullName=${formData.fullName}|companyName=${formData.companyName}`);
    // Use context to send fullName and companyName
    const context = `fullName=${encodeURIComponent(formData.fullName.trim())}|companyName=${encodeURIComponent(formData.companyName.trim())}`;
    formDataToUpload.append('context', context);

    console.log('FormData contents:');
    for (let [key, value] of formDataToUpload.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      setUploadStatus('Uploading...');
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: formDataToUpload,
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Cloudinary response:', data);

      if (response.ok && data.secure_url) {
        setDocumentUrl(data.secure_url);
        setUploadStatus('File uploaded successfully!');
      } else {
        setUploadStatus(`Upload failed: ${data.error?.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus(`An error occurred while uploading: ${error.message}`);
    }
  };

  return (
 
<div
  className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 black"
 
>
     {/* Background image with gradient overlay */}
  <img 
    src={ImageBlur} 
    alt="Background" 
    className="image-gradient"
  />

  {/* Blur overlay */}
  <div className="layer-blur"></div>


  <div className="max-w-6xl mx-auto space-y-12">
    {/* Container with flex layout on md+ screens */}
    <div className="md:flex md:space-x-12 items-start">
      {/* Left side: text section */}
      <section className="md:w-1/2 text-left pt-20 m-0 text-white">
        <h1 className="text-[60px] text-white font-garamond mb-6 tracking-wide">
          Submit a Debtor
        </h1>
        <p className="text-lg font-garamond mt-12 max-w-lg">
          Help us keep the industry informed. Use the form below to report companies or individuals who owe you money.
          Your contribution strengthens the network and promotes accountability across the board.
        </p>
          {/* Button with rising chart icon */}
 <Link
  to="/view"
  className="mt-8 inline-flex items-center px-6 py-3 ml-38 text-white font-garamond text-lg rounded-lg shadow-lg hover:bg-[#333333] transition-all duration-300"
>
  View
  <svg
    className="w-6 h-6 ml-3"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <polyline
      points="3 17 8 12 13 16 18 9 21 12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>


      </section>

      {/* Right side: form */}
{/* blur: form */}
<div className="md:w-1/2 bg-white/10 backdrop-blur-lg mt-24 rounded-xl shadow-lg p-4 w-full max-w-none border border-white/20 h-auto max-h-[550px] overflow-auto z-10">
  <h1 className="text-2xl  text-center text-gray-300 font-garamond text-[#222222] mb-4 border-b border-[#222222] pb-2">
    Freight Claim Recovery Submission
  </h1>

  <form onSubmit={handleSubmit} className="space-y-3 max-w-sm mx-auto">
    <div>
      <label className="block text-xs font-garamond font-medium text-gray-300 mb-1">
        Full Name*
      </label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
        required
      />
    </div>

    <div>
      <label className="block font-garamond text-xs font-medium text-gray-300 mb-1">
        Company Name*
      </label>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border text-white border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
        required
      />
    </div>

    <div>
      <label className="block font-garamond text-xs font-medium text-gray-300 mb-1">
        Upload Documentation*
      </label>
      <input
        type="file"
        name="documentFile"
        onChange={handleFileChange}
        className="w-full px-3 py-2 border text-gray-300 border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 text-sm"
        accept=".pdf,.jpg,.jpeg,.png"
        required
      />
      <p className="text-[10px] mt-1 font-garamond text-gray-300">
        Required: Bill of Lading, Rate Confirmation, Invoice (PDF/JPEG/PNG)
      </p>
    </div>

    <button
      type="submit"
      className="w-full bg-[#1a1a1a] font-garamond text-gray-300 py-2 px-4 rounded-md shadow-md hover:bg-[#333333] transition-all duration-300 font-semibold text-base flex items-center justify-center"
    >
      <svg
        className="w-4 h-4 mr-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      Initiate Recovery
    </button>
  </form>

  {uploadStatus && (
    <div className="mt-3">
      <p className={`text-sm text-${uploadStatus.includes('success') ? 'green' : 'red'}-600`}>
        {uploadStatus}
      </p>
    </div>
  )}

  {documentUrl && (
    <div className="mt-3">
      <p className="text-sm text-white font-garamond">Uploaded Document URL:</p>
      <a href={documentUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white underline">
        {documentUrl}
      </a>
    </div>
  )}
</div>

    </div>
  </div>
</div>

  );
};

export default Place;





























