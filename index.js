const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World ver2!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
