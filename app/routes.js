const { registerFeature1Routes } = require("./feature1");
const { registerFeature2Routes } = require("./feature2");

module.exports = {
  registerAllAppRoutes: (app) => {
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    registerFeature1Routes(app);
    registerFeature2Routes(app);
  },
};
