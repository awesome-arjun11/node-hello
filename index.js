const http = require('http');
const port = process.env.PORT || 3000;
const port2 = process.env.PORT2 || 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); 
  const msg = '<h2>Hello Node!<h2>\n<button onclick="(()=>window.location.port=3001)()">Go to 3001</button>';
  res.end(msg);
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html'); 
	const msg2 = '<h2>Hello again from Node!<h2>\n<button onclick="(()=>window.location.port=3000)()">Go to 3000</button>';
	res.end(msg2);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

server2.listen(port2, () => {
	console.log(`Server2 running on http://localhost:${port2}/`);
})