const app = require('./app');

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log('-----------------EXPRESS----------------------------');
  console.log(`Connected to Express on port ${PORT}`);
  console.log('----------------------------------------------------');
});
