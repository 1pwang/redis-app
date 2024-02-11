// Importing the required package
const redis = require("redis");

// Creating the Redis client object
const client = redis.createClient();

// An async function to perform a few Redis operations
const performRedisOperations = async () => {
  // Connect to the Redis server
  await client.connect();

  // Setting a key-value pair in Redis
  await client.set("website", "educative")

  // Retrieving the value store for the key 'webiste'
  const data = await client.get("website")

  // Retrieving all the keys present in Redis
  const allKeys = await client.keys('*')

  // Disconnecting with Redis
  await client.disconnect();

  // Returning the response in an object form
  return { keys: allKeys, "website": data }
}

// Calling the async funtion
performRedisOperations()
  .then(data => console.log(data))
  .catch(err => console.log(err));
  