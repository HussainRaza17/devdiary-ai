class AIController {
    constructor(private aiService: AIService) {}

    async getSuggestions(req: Request, res: Response) {
        try {
            const inputData = req.body;
            const suggestions = await this.aiService.generateSuggestions(inputData);
            res.status(200).json(suggestions);
        } catch (error) {
            res.status(500).json({ message: 'Error generating suggestions', error });
        }
    }
}

export default AIController;