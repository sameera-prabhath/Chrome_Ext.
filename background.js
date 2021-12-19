const showAlerts = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        setTimeout(function() {
            chrome.tabs.sendMessage(tabs[0].id, { cmd: "showMessage" }, function(obj) {
                console.log('Show Alert', obj);
            });
        }, 1000)
        setTimeout(function() {
            chrome.tabs.sendMessage(tabs[0].id, { cmd: "hideAlert" }, function(obj) {
                console.log('Hide Alert', obj);
            });
        }, 5000);
    });
}


chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
           
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


// chrome.webNavigation.onBeforeNavigate.addListener(function(e) {
//     IsLegitimateUrl(e.url).then(x => {

//         if (!x) {
//             showAlerts();
//         }
//     });

// });