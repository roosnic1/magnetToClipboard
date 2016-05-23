'use strict';

function save_options() {
  var string = document.getElementById('templateString_input').value;
  chrome.storage.sync.set({
    templateString: string
  }, function() {
    var status = document.getElementById('templateString_status');
    status.textContent = 'Template String saved';
    setTimeout(function () {
      status.textContent = '';
    },1250);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    templateString: 'webtorrent download "%s" --vlc'
  }, function (items) {
    document.getElementById('templateString_input').value = items.templateString;
  })
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('templateString_button').addEventListener('click', save_options);