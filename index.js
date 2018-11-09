const express = require('express');
const port = 9000;
const server = express();
const projectModel = require('./projects/projectRoutes.js');

server.use(express.json());
server.use("/projects", projectModel);

server.listen( port, () => {
    console.log(`====== Server listening on port ${port} ======`);
});
