import express, { json, Request, Response } from 'express';

const app = express();
app.use(json());

app.get('/health', (req, res) => {
  console.log('/health endpoint hit');
  res.send('OK');
});

app.post('/todo/create', async (req: Request, res: Response) => {
  console.log('received the following data: ', req.body)
});

app.listen(3000, () => console.log('server started to listen on port 3000'));