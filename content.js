chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    switch (obj) {
        case "getInputFeilds":
            sendResponse(getInputFeilds());
            break;
        case "showMessage":
            // showAlert();
            sendResponse('added');
            break;
        case "hideAlert":
            // hideAlert();
            sendResponse('hidden');
            break;
        default:
            alert("Sending default")
            console.log(obj);
            sendResponse(null);
    }
});

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     alert('updated from contentscript');
//  });



function getInputFeilds() {
    var inputs, index;
    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; index++) {
        var inp = inputs[index];
        // if (inp.type === 'email' || inp.type === 'password') {
            inp.style.border = "2px solid red "
            inp.style.borderColor = 'red'
        // }
    }
    return inputs;
}
