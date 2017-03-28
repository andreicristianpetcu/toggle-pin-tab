chrome.commands.onCommand.addListener(function(action) {
  if (action == "toggle-pin-tab") {
    chrome.tabs.query({currentWindow: true, active: true,}, function(foundTabs) {
      var currentTabId = foundTabs[0].id
      chrome.tabs.get(currentTabId, function(currentTab){
        const toggledValue = !currentTab.pinned;
        chrome.tabs.update(currentTabId, {pinned: toggledValue});
      });
    });
  }
});
