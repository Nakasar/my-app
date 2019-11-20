// Import library
const express = require('express');
// Use default PORT or given by platform.
const PORT = process.env.PORT || 80;

// Create application
const app = express();

// Some basic route
app.get('/', (req, res) => {
  // Send response.
  res.json({ message: 'coucou moi', title: 'Coucou', date: new Date().toISOString() });
});

// Start server.
app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.info('Server started.');
});
