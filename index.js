import express from 'express';
import dotenv from 'dotenv';
import './services/cron.js';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  const data = {
    message: 'Health API Running Succcessfully',
    code: 200,
  };

  res.status(200).send(data);
});

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT || 3000} `));
