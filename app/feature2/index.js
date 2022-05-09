module.exports = {
  registerFeature2Routes: (app) => {
    app.get('/feature2', (req, res) => {
      res.send('This is the implementation of feature 2!');
    });
  }
};
