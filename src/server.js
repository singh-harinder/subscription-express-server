const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  console.log('Successfully hit the endpoint');

  res.send('hi');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
