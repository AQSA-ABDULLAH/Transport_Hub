// controllers/otpController.js
const otpGenerator = require('otp-generator');
const OTP = require('../../models/OTPverify');
const jwt = require('jsonwebtoken');
const mailSender = require("../../utils/mailSender");
const yourSecretKey="abcdef"
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
  console.log(email)
    // Generate a new OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
console.log(otp);
    // Send verification email
    await sendVerificationEmail(email, otp);

    // Save email and OTP to OTP collection
    const otpRecord = new OTP({
      email,
      otp
    });
    await otpRecord.save();
    console.log(otpRecord);
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      otp: otpRecord.otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// Function to send verification email
async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email",
      `<h1>Please confirm your OTP</h1>
       <p>Here is your OTP code: ${otp}</p>`
    );
    console.log("Email sent successfully: ", mailResponse);
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
}



exports.verifyOTP = async (req, res) => {
  try {
    console.log(req.body);
    const { email, otp } = req.body;
    
    // Retrieve the OTP record from the database
    const otpRecord = await OTP.findOne({ email });
    console.log('OTP Record:', otpRecord);

    // If no OTP record found, return 404
    if(!otpRecord.otp==otp){
      return res.status(404).json({ success: false, message: 'Email not found' });
      // OTP verification successful
    // Generate token and return it
    }
    const token = jwt.sign({ email: otpRecord.email }, yourSecretKey, { expiresIn: '1d' });
    console.log('Token:', token);
    return res.json({ success: true, token, message: "Valid OTP" });
    
  } catch (error) {
    console.log('Error verifying OTP:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};




