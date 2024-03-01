
chrome.action.onClicked.addListener((tab) => {
  console.log("chrom", chrome, tab)
  // chrome.scripting.executeScript({
  //   target: {tabId: tab.id},
  //   files: ['content.js']
  // });
  chrome.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    files: ['content.js'],
  });
});

