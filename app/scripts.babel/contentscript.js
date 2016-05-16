'use strict';

var links = document.links;


for(var i=0; i < links.length; i++) {
  if(links[i].href && links[i].href.indexOf('magnet') === 0) {
    console.log('found it');
  }
}
