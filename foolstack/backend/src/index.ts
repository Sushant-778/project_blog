import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => {
  res.send('Twake Production - Pratiyogita');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
