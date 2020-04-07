const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
  const { headers, method, url } = req;
  console.log(headers, method, url);
  res.end();
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));