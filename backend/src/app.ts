import express from 'express';
import bodyParser from 'body-parser';
import { setAIRoutes } from './routes/aiRoutes';
import { setStorageRoutes } from './routes/storageRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setAIRoutes(app);
setStorageRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});