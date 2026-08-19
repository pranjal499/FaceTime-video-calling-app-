import express, {type Application, type Request, type Response} from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('hello');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});