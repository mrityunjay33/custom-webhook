const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any available port

// Use middleware to parse JSON request bodies
app.use(bodyParser.json());

// Define a route to handle incoming webhook events
app.post('/webhook', (req, res) => {
  const payload = req.body; // The data sent by the webhook provider
  console.log('Received webhook event:', payload);
  // Implement your event handling logic here
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Webhook server listening on port ${port}`);
});
