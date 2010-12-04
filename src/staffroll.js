chrome.tabs.onCreated.addListener(function(tab) {
  alert('tabs.onCreated --'
              + ' window: ' + tab.windowId
              + ' tab: '    + tab.id
              + ' index: '  + tab.index
              + ' url: '    + tab.url);
});