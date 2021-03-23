const http = require("http");

const PORT = 3000
const style = `
<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}

body {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>
`

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': "text-html" });
  if (request.url === '/') {
    response.statusCode = 200
    response.write(`
      ${style}
      <h1>Hello world</h1>
      <h3>Welcome to my aplication! :)</h3>
      <Script>
        console.log('%cRoute: %c"/"', 'color: green', 'color: red')
      </Script>
      `);
  } else if (request.url === '/next') {
    response.statusCode = 200
    response.write(`
      ${style}
      <h1>Page 2</h1>
      <h3>Thanks for use my aplication! :)</h3>
      <Script>
        console.log('%cPage: %c2', 'color: green', 'color: red')
      </Script>
      `);
  } else {
    response.statusCode = 400
    response.write(`
      ${style}
      <h1>ERROR</h1>
      <h3>Sorry, page <a href="http://localhost:${PORT}${request.url}">localhost:${PORT}${request.url}</a> not found</h3>
      <Script>
        console.error('%cRoute: %c"${request.url}" %cnot exists!', 'color: green', 'color: red', 'color: green')
      </Script>
    `)
  }
  response.end();
})

server.listen(PORT, console.log("Server is running..."));