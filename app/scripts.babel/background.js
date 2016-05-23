'use strict';

let string = '';

function setClipboard(value) {
  var textarea = document.getElementById('ta');
  if(string !== undefined && string.indexOf('%s') > -1) {
    value = string.replace('%s',value);
  }
  textarea.value = value;
  textarea.select();
  return document.execCommand('copy');
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  (request.method === 'setClipboard' && sendResponse !== undefined) ? sendResponse(setClipboard(request.value)) : console.error('Unknown method "%s"', request.method);
});

chrome.storage.onChanged.addListener(function (data) {
  (data.templateString !== undefined) && (string = data.templateString.newValue);
});

chrome.storage.sync.get({
  templateString: ''
}, function (items) {
  string = items.templateString;
});