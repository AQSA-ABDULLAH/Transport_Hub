const PickupBoy = require('../../models/Pickupboy');

const submitFormData = async (req, res) => {
  try {
    const formData = req.body;

    // Create a new instance of the PickupBoy model with the form data
    const pickupBoy = new PickupBoy(formData);

    // Save the pickupBoy document to the database
    await pickupBoy.save();

    res.status(201).json({ message: 'Form data submitted successfully', pickupBoy });
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  submitFormData,
};

