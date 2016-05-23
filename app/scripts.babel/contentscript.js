'use strict';

var extensionId = 'ednklkkohnjkdfniolbmafkgnjkmchjg';

var links = document.links;

for(var i=0; i < links.length; i++) {
  if(links[i].href && links[i].href.indexOf('magnet') === 0) {
    let magnetLink = links[i].href;
    links[i].addEventListener('click', function () {
      chrome.runtime.sendMessage(
        extensionId,
        { method: 'setClipboard', value: magnetLink },
        function(response) {
          if(!response) {
            console.error('Error. Could not copy to clipboard');
          } else {
            console.log('Copied magnet link to clipboard');
          }

        }
      );
    })
  }
}
