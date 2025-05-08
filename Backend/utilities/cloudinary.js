const cloudinary = require('cloudinary').v2;
const fs = require('fs');
require('dotenv').config();
const uploadToCloudinary = async (localFilePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: 'uploads', 
    });
    fs.unlinkSync(localFilePath);

    return {
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (err) {
    console.error('Cloudinary upload failed:', err.message);
   
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return {
      success: false,
      error: err.message,
    };
  }
};
module.exports = uploadToCloudinary;