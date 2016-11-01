'use strict';

var renderer = require('./lib/renderer');

hexo.extend.renderer.register('pug', 'html', renderer, true);
