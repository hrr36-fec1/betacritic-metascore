const app = require('./app');

const PORT = 4444;

app.listen(PORT, () => {
  console.log(`Connected to Express on port ${PORT}`);
});
