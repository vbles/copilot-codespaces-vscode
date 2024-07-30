// Create web server
// 1. Create a web server
// 2. Listen on port 3000
// 3. Respond with a message

// 1. Create a web server
const http = require('http');

const server = http.createServer((req, res) => {
  // 3. Respond with a message
  res.end('Welcome to our server!');
});

// 2. Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000...');
});
