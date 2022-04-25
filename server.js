const http = require("http");
http
  .createServer((request, response) => {
    if (request.url === "/produto") {
      response.end(
        JSON.stringify({
          mensagem: "aqui ta o produto",
        })
      );
    } else {
      response.end(
        JSON.stringify({
          mensagem: "oi marinalva",
        })
      );
    }
  })
  .listen(3001, () => console.log("servidor rodando na porta 3001"));
