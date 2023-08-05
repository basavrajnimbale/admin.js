const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./admin');
const shopRoutes = require('./shop');

app.use(bodyParser.urlencoded({ extended: false }));

// Separate middleware for /admin routes
app.use('/admin', (req, res, next) => {
  // Implement any admin-specific middleware here if needed
  // For example, you can add authentication or authorization checks for admin routes.
  console.log('Admin middleware');
  next();
});

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});