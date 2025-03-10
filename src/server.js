import express from 'express';
import 'dotenv/config.js';

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
