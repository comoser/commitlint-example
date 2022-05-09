const express = require('express');
const { registerAllAppRoutes } = require("./routes");
const app = express();
const port = 3000;

registerAllAppRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
