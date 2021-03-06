'use strict';

var pug = require('pug');

function pugCompile(data) {
  return pug.compile(data.text, {
    filename: data.path,
    pretty: true,
    cache: true
  });
}

function pugRenderer(data, locals) {
  return pugCompile(data)(locals);
}

module.exports = pugRenderer;