browser.browserAction.onClicked.addListener(callScript);
function callScript() {
    browser.tabs.executeScript({
            file: "/faster-vid.js",
            allFrames: true
        });
}