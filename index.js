// Importing the required modules
const express = require("express");

// Importing the function to perform a few Redis operations
const { performRedisOperations } = require('./redisOperations.js')

// Instantiating an object express
const app = express();

// Using middleware to parse the JSON sent in the request body
app.use(express.json());

// Using the express object, handle the '/' route for GET requests
app.get("/", async (req, res) => {
  // Call the function to perform redis operations and return the response
  const response = await performRedisOperations();
  return res.json(response)
});

// Using the express object to listen to port 8000 for incoming requests
app.listen(8000, () => {
  console.log(`Listening on port 80!`);
});