chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: "ui.html" });
});
