export const setAIRoutes = (app) => {
    const AIController = require('../controllers/aiController');
    const aiController = new AIController();

    app.get('/api/ai/suggestions', aiController.getSuggestions.bind(aiController));
};