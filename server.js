const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./data/project-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/', projectRouter);

module.exports = server;
