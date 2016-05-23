'use strict';

var extensionId = 'ednklkkohnjkdfniolbmafkgnjkmchjg';

var links = document.links;


for(var i=0; i < links.length; i++) {
  if(links[i].href && links[i].href.indexOf('magnet') === 0) {
    let magnetLink = links[i].href;
    links[i].addEventListener('click', function () {
      console.log('MagnetLink',magnetLink);
      chrome.runtime.sendMessage(
        extensionId,
        { method: 'setClipboard', value: magnetLink },
        function(response) {
          console.log('extension setClipboard response', response);
        }
      );
    })
  }
}
