// set up listener function
browser.browserAction.onClicked.addListener(callScript);

// when onClicked event happens, run function in content script
function callScript() {
    console.log("callScript called");
    browser.tabs.executeScript({
        code: `increaseSpeed();`,
        allFrames: true
    })
}