class StorageController {
    constructor(private storageService: StorageService) {}

    saveData(req: Request, res: Response) {
        const { key, value } = req.body;
        this.storageService.saveData(key, value)
            .then(() => res.status(200).send('Data saved successfully'))
            .catch(err => res.status(500).send(err.message));
    }

    retrieveData(req: Request, res: Response) {
        const { key } = req.params;
        this.storageService.retrieveData(key)
            .then(data => res.status(200).json(data))
            .catch(err => res.status(500).send(err.message));
    }
}

export default StorageController;