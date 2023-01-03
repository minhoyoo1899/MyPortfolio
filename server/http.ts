import * as http from "http";
import * as fs from "fs";

const index = fs.readFileSync('../public/index.html', 'utf-8');
// const threeJS = fs.readFileSync('../build/three/three.js', 'utf-8');
const threeJS = fs.readFileSync('../build/three/three.js', 'utf-8');
const threeModule = fs.readFileSync('../node_modules/three/build/three.module.js', 'utf-8');
const GLTFLoader = fs.readFileSync('../node_modules/three/examples/jsm/loaders/GLTFLoader.js', 'utf-8');
const httpServer = http.createServer((req: any, res: any) => {
  let url = req.url;
  console.log(url)
  switch (req.method) {
    case "GET":
      if (url === "/") {
        res.writeHead(200, { 'Content-Type': 'text:html; charset=UTF-8;' });
        res.write(index);
        res.end();
      // } else if (url === "/three.js") {
      //   res.writeHead(200, { 'Content-Type': 'text:javascript; charset=UTF-8;' });
      //   res.write(threeJS);
      //   res.end();
      } else if (url === "/build/three/three.js") {
        res.writeHead(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
        res.write(threeJS);
        res.end();
      } else if (url === "/node_modules/three/build/three.module.js") {
        res.writeHead(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
        res.write(threeModule);
        res.end();
      } else if (url === "/node_modules/three/examples/jsm/loaders/GLTFLoader.js") {
        res.writeHead(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
        res.write(GLTFLoader);
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

httpServer.listen(8282);