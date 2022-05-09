const express = require('express');
const { registerFeature2Routes } = require("./feature2");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/feature1', (req, res) => {
  res.send('This is the implementation of feature 1!');
});

registerFeature2Routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
