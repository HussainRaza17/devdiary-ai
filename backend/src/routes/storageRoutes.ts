export const setStorageRoutes = (app) => {
    const storageController = new (require('../controllers/storageController')).StorageController();

    app.post('/api/storage/save', (req, res) => {
        const data = req.body;
        storageController.saveData(data)
            .then(result => res.status(200).json(result))
            .catch(error => res.status(500).json({ error: error.message }));
    });

    app.get('/api/storage/retrieve', (req, res) => {
        storageController.retrieveData()
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json({ error: error.message }));
    });
};