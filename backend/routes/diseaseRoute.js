import express from 'express';
import { getSymptoms, getDiseases, predictDisease, checkHealth } from '../controllers/diseaseController.js';
import authUser from '../middlewares/authUser.js';

const diseaseRouter = express.Router();

// Public endpoints (no authentication required)
diseaseRouter.get('/symptoms', getSymptoms);
diseaseRouter.get('/diseases', getDiseases);
diseaseRouter.get('/health', checkHealth);

// Protected endpoints (require user authentication)
diseaseRouter.post('/predict', authUser, predictDisease);

export default diseaseRouter; 