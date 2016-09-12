#!/usr/bin/env node

'use strict';

var compression = require('compression')
var express = require('express');
var app = express();

app.use(compression());

app.use('/assets', express.static('assets'));
app.use('/*', express.static('.'));

var port = Number(process.env.PORT || 3000);
app.listen(port, function () {
  console.log('Express server running at http://localhost:' + port);
});

