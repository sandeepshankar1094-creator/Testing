import express from 'express';

const app = express();
const port = process.env.PORT ?? 3000;

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from the Node.js API!' });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
