import express         from 'express';
import serverRendering from './lib/server_rendering';

const server  = express();

server.use(serverRendering);

export default server;
