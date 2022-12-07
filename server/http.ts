import * as http from "http";
import * as fs from "fs";

const index = fs.readFileSync('../Web_Content/index.html', 'utf-8');
const threeJS = fs.readFileSync('../build/three/three.js', 'utf-8');
const DNS = http.createServer((req: any, res: any) => {
  let url = req.url;
  switch (req.method) {
    case "GET":
      if (url === "/") {
        res.writeHead(200, { 'Content-Type': 'text:html; charset=UTF-8;' });
        res.write(index);
        res.end();
      } else if (url === "/three.js") {
        res.writeHead(200, { 'Content-Type': 'text:javascript; charset=UTF-8;' });
        res.write(threeJS);
        res.end();
      }
    case "POST":
      console.log("POST");
      break;

    case "PUT":
      console.log("PUT");
      break;

    case "DELETE":
      console.log("DELETE");
      break;

    case "PATCH":
      console.log("PATCH");
      break;

    default:
      res.writeHead(405, { 'Content-Type': 'text/html' });
      res.write('Method Not Allowed');
      res.end();
      break;
  }
});

DNS.listen(8282);