const http = require("http");

const PORT = 3000;
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
`;
const routes = {
  home: "/",
  next: "/next",
};

const server = http.createServer((request, response) => {
  if (request.url === routes.home && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text-html" });
    response.write(`
      ${style}
      <h1>Hello world</h1>
      <h3>Welcome to my aplication! :)</h3>
      <Script>
        console.log('%cRoute: %c"/"', 'color: green', 'color: red')
      </Script>
      `);
  } else if (request.url === routes.next && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text-html" });
    response.write(`
      ${style}
      <h1>Page 2</h1>
      <h3>Thanks for use my aplication! :)</h3>
      <Script>
        console.log('%cPage: %c2', 'color: green', 'color: red')
      </Script>
      `);
  } else {
    response.writeHead(404, { "Content-Type": "text-html" });
    response.write(`
      ${style}
      <h1>ERROR</h1>
      <h3>Sorry, page <a href="http://localhost:${PORT}${request.url}">localhost:${PORT}${request.url}</a> not found</h3>
      <Script>
        console.error('%cRoute: %c"${request.url}" %cnot exists!', 'color: green', 'color: red', 'color: green')
      </Script>
    `);
  }
  response.end();
});

server.listen(PORT, console.log("Server is running..."));
