import * as http from "http";
import * as fs from "fs";
import express from 'express';
import path from 'path';

const index = fs.readFileSync('../public/index.html', 'utf-8');
// const threeJS = fs.readFileSync('../build/three/three.js', 'utf-8');
const threeJS = fs.readFileSync('../build/three/three.js', 'utf-8');
const threeModule = fs.readFileSync('../node_modules/three/build/three.module.js', 'utf-8');
const GLTFLoader = fs.readFileSync('../node_modules/three/examples/jsm/loaders/GLTFLoader.js', 'utf-8');

const port: number = 8282;


class httpServerClass {
  private server: http.Server;
  private port: number;

  constructor(port: number) {
    this.port = port;
    const app = express();    
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static(path.join(__dirname, '../build')));
    app.use(express.static(path.join(__dirname, '../node_modules')));

    app.get("/", (req, res) => {
      res.sendFile(index);
    });

    app.get("../build/three/three.js", (req, res) => {
      res.sendFile(threeJS);
    });

    app.get("/node_modules/three/build/three.module.js", (req, res) => {
      res.sendFile(threeModule);
    });

    app.get("/node_modules/three/examples/jsm/loaders/GLTFLoader.js", (req, res) => {
      res.sendFile(GLTFLoader);
    });

    


    // app.use(express.static(path.join(__dirname, '../client')))

    // In the webpack version of the boilerplate, it is not necessary
    // to add static references to the libs in node_modules if
    // you are using module specifiers in your client.ts imports.
    //
    // Visit https://sbcode.net/threejs/module-specifiers/ for info about module specifiers
    //
    // This server.ts is only useful if you are running this on a production server or you
    // want to see how the production version of bundle.js works
    //
    // to use this server.ts
    // # npm run build        (this creates the production version of bundle.js and places it in ./dist/client/)
    // # tsc -p ./src/server  (this compiles ./src/server/server.ts into ./dist/server/server.js)
    // # npm start            (this starts nodejs with express and serves the ./dist/client folder)
    //
    // visit http://127.0.0.1:3000

    this.server = new http.Server(app);
  }

  public Start() {
    this.server.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}.`);
    });
  }
}

new httpServerClass(port).Start()

// const httpServer = http.createServer((req: any, res: any) => {
//   let url = req.url;
//   console.log(url)
//   switch (req.method) {
//     case "GET":
//       if (url === "/") {
//         res.writeHead(200, { 'Content-Type': 'text:html; charset=UTF-8;' });
//         res.write(index);
//         res.end();
//       // } else if (url === "/three.js") {
//       //   res.writeHead(200, { 'Content-Type': 'text:javascript; charset=UTF-8;' });
//       //   res.write(threeJS);
//       //   res.end();
//       } else if (url === "/build/three/three.js") {
//         res.writeHead(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
//         res.write(threeJS);
//         res.end();
//       } else if (url === "/node_modules/three/build/three.module.js") {
//         res.writeHead(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
//         res.write(threeModule);
//         res.end();
//       } else if (url === "/node_modules/three/examples/jsm/loaders/GLTFLoader.js") {
//         res.writeHead(200, { 'Content-Type': 'text/javascript; charset=UTF-8;' });
//         res.write(GLTFLoader);
//         res.end();
//       }

//     case "POST":
//       console.log("POST");
//       break;

//     case "PUT":
//       console.log("PUT");
//       break;

//     case "DELETE":
//       console.log("DELETE");
//       break;

//     case "PATCH":
//       console.log("PATCH");
//       break;

//     default:
//       res.writeHead(405, { 'Content-Type': 'text/html' });
//       res.write('Method Not Allowed');
//       res.end();
//       break;
//   }
// });

// httpServer.listen(8282);