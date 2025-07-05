import axios from 'axios';

const DISEASE_API_URL = process.env.DISEASE_API_URL;

// Get available symptoms from the microservice
const getSymptoms = async (req, res) => {
  try {
    const response = await axios.get(`${DISEASE_API_URL}/symptoms`);
    res.json({ success: true, symptoms: response.data });
  } catch (error) {
    console.log('Error fetching symptoms:', error);
    res.json({ success: false, message: 'Failed to fetch symptoms' });
  }
};

// Get available diseases from the microservice
const getDiseases = async (req, res) => {
  try {
    const response = await axios.get(`${DISEASE_API_URL}/diseases`);
    res.json({ success: true, diseases: response.data });
  } catch (error) {
    console.log('Error fetching diseases:', error);
    res.json({ success: false, message: 'Failed to fetch diseases' });
  }
};

// Predict disease based on symptoms
const predictDisease = async (req, res) => {
  try {
    const { symptoms } = req.body;
    
    if (!symptoms || !Array.isArray(symptoms) || symptoms.length === 0) {
      return res.json({ success: false, message: 'Please provide symptoms array' });
    }

    const response = await axios.post(`${DISEASE_API_URL}/predict`, {
      symptoms: symptoms
    });

    res.json({ success: true, prediction: response.data });
  } catch (error) {
    console.log('Error predicting disease:', error);
    res.json({ success: false, message: 'Failed to predict disease' });
  }
};

// Check microservice health
const checkHealth = async (req, res) => {
  try {
    const response = await axios.get(`${DISEASE_API_URL}/health`);
    res.json({ success: true, health: response.data });
  } catch (error) {
    console.log('Error checking health:', error);
    res.json({ success: false, message: 'Microservice is not available' });
  }
};

export {
  getSymptoms,
  getDiseases,
  predictDisease,
  checkHealth
}; 