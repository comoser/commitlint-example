module.exports = {
  registerFeature1Routes: (app) => {
    app.get('/feature1', (req, res) => {
      res.send('This is the implementation of feature 1!');
    });
  }
};
