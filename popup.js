// let currentURL = '';
// let whoIsObj = null;

// // requestInfoFromBackgroundScript()
// checkNetwork();




// document.addEventListener('DOMContentLoaded', function() {
//     chrome.windows.getCurrent(function(currentWindow) {
//         chrome.tabs.query({ active: true, windowId: currentWindow.id }, function(activeTabs) {
//             // inject content_script to current tab
//             chrome.tabs.executeScript(activeTabs[0].id, { file: 'content.js', allFrames: false });
//         });
//     });
// });



// function navigateToMoreInfo() {
//     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//         currentURL = tabs[0].url;

//         fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_jLkp7xq6ptbWMZ9Eo7eaecuGptW89&domainName=${currentURL}&outputFormat=JSON`)
//             .then(response => response.json())
//             .then(data => {
//                 let host = data.WhoisRecord.domainName;
//                 chrome.tabs.create({
//                     url: `http://localhost:3000/websiteDetails/${host}`,
//                     active: true
//                 })
//             })
//             .catch(error => console.error(error));

//     });
// }

// function reportToBlacklist() {

//     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//         currentURL = tabs[0].url;


//         fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_jLkp7xq6ptbWMZ9Eo7eaecuGptW89&domainName=${currentURL}&outputFormat=JSON`)
//             .then(response => response.json())
//             .then(data => {
//                 let host = data.WhoisRecord.domainName;
//                 fetch("http://localhost:5000/api/blacklist", {
//                         method: "POST",
//                         body: JSON.stringify({
//                             url: host
//                         }),
//                         headers: {
//                             "Content-type": "application/json; charset=UTF-8"
//                         }
//                     })
//                     .then(response => response.json())
//                     .then(json => alert('Reported to blacklist'));
//             })
//             .catch(error => console.error(error));



//     });

// }

// function reportToWhitelist() {

//     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//         currentURL = tabs[0].url;


//         fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_jLkp7xq6ptbWMZ9Eo7eaecuGptW89&domainName=${currentURL}&outputFormat=JSON`)
//             .then(response => response.json())
//             .then(data => {
//                 let host = data.WhoisRecord.domainName;
//                 fetch("http://localhost:5000/api/whitelsit", {
//                         method: "POST",
//                         body: JSON.stringify({
//                             url: host
//                         }),
//                         headers: {
//                             "Content-type": "application/json; charset=UTF-8"
//                         }
//                     })
//                     .then(response => response.json())
//                     .then(json => alert('Reported to whitelist'));
//             })
//             .catch(error => console.error(error));



//     });
// }


document.getElementById("btn1").addEventListener("click", checkCurrentTab);

function checkCurrentTab() {
    console.log("btn-01")
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        var url = tabs[0].url;
        chrome.tabs.sendMessage(tabs[0].id, "getInputFeilds", null, function (obj) {
            console.log("getHeadTitle.from content_script:", obj);
        });
    });
}








// if (whoIsObj) {
//     console.log(whoIsObj.WhoisRecord.administrativeContact.city)
//         // document.getElementById('city').innerHTML=
// }

// // function requestInfoFromBackgroundScript() {
// //     chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
// //         currentURL = tabs[0].url;
// //         // console.log(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_hEO0I17JhbTCiC6y7YRYt9IW62l24&domainName=${currentURL}&outputFormat=JSON`);
// //         fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_jLkp7xq6ptbWMZ9Eo7eaecuGptW89&domainName=${currentURL}&outputFormat=JSON`)
// //             .then(response => response.json())
// //             .then(data => {
// //                 whoIsObj = data;
// //                 getIpData(whoIsObj)
// //             })
// //             .catch(error => console.error(error));
// //     });
// // }

// // function getIpData(whoIsObj) {
// //     const host = whoIsObj.WhoisRecord.domainName;
// //     fetch(`https://endpoint.apivoid.com/domainbl/v1/pay-as-you-go/?key=d58abc5be3bed02ea9c36833c7b2be60c4f01872&host=${host}`)
// //         .then(response => response.json())
// //         .then(data => {
// //             let dataObj = {
// //                 whois: whoIsObj,
// //                 dns: data
// //             }
// //             // printData(dataObj);
// //         })
// //         .catch(error => console.error(error))
// // }


// function printData(dataObj) {

//     const countryCode = dataObj.dns.data.report.server.country_code
//     document.getElementById('country').src = `https://www.countryflags.io/${countryCode}/flat/64.png`;
//     document.getElementById('hostname').innerHTML = dataObj.whois.WhoisRecord.domainName;
//     document.getElementById('ipaddress').innerHTML = dataObj.dns.data.report.server.ip;
//     document.getElementById('created').innerHTML = dataObj.whois.WhoisRecord.createdDateNormalized ? dataObj.whois.WhoisRecord.createdDateNormalized : 'Unknown'
//     document.getElementById('expired').innerHTML = dataObj.whois.WhoisRecord.expiresDateNormalized ? dataObj.whois.WhoisRecord.expiresDateNormalized : 'Unknown';
//     document.getElementById('hostname').innerHTML = dataObj.whois.WhoisRecord.domainName;
//     document.getElementById('country-name').innerHTML = dataObj.dns.data.report.server.country_name;

//     document.getElementById('extension').style.display = "block";
//     document.getElementById('loading').style.display = "none";

// }

// function checkNetwork() {

//     // var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//     // var type = connection.type;

//     console.log(navigator.connection)


// }


// function takeScreenshot() {
//     chrome.tabs.captureVisibleTab(null, {}, function(image) {
//         uploadImage(image);
//         // var a = document.createElement("a"); //Create <a>
//         // a.href = image; //Image Base64 Goes here
//         // a.download = "Image.jpeg"; //File name Here
//         // a.click(); //Downloaded file
//     });
// }

// async function uploadImage(fileString) {

//     var img = dataURLtoFile(fileString, 'hello.jpg');
//     console.log(img.name);
//     // const ref = firebase.storage().ref();
//     // const name = new Date() + '_' + file.name;
//     // const metadate = {
//     //     ContentType: file.type
//     // }
//     let formData = new FormData();
//     // let photo = inp.files[0];      

//     formData.append("imagecapture", img);
//     // formData.append("user", JSON.stringify(user));  

//     try {
//        let r = await fetch('http://ec2-3-80-147-92.compute-1.amazonaws.com/images', {method: "POST", body: formData}).then(res=> res.json())
//        .then(data=>{
//            if(data.capturepred.reslogoCapture.match > 50){
//             alert('Phishing Alert! Nemesis has detected this website as a phishing website.');
//            }
//            else{
//                alert('A phishing attempt could not be detected.')
//            }
//        })   







//     } catch(e) {
//        console.log('we have problem...:', e);
//     }


// }

// function dataURLtoFile(dataurl, filename) {

//     var arr = dataurl.split(','),
//         mime = arr[0].match(/:(.*?);/)[1],
//         bstr = atob(arr[1]),
//         n = bstr.length,
//         u8arr = new Uint8Array(n);

//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     return new File([u8arr], filename, { type: mime });
// }

// var getLocation = function(href) {
//     var l = document.createElement("a");
//     l.href = href;
//     return l;
// };
// async function checkUrl() {
//     chrome.tabs.query({ active: true, currentWindow: true }, async(tabs) => {
//         currentURL = tabs[0].url;
//         var l = getLocation(currentURL).hostname.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]
//         console.log(l);

//         const rawResponse = await fetch('http://mainapi.alwaysdata.net/api/searchUrl', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ url: l })
//         });
//         const content = await rawResponse.json();
//         if (content.whiteList == true) {
//             alert("this is a whitelisted website")
//         }
//         else if (content.blackList == true) {
//             alert("Warning! this is a blacklisted website")
//         }
//         else {
//             //alert("not found");
//             takeScreenshot();

//         }
//         //console.log(content);

//     });
// }



// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.message === 'TabUpdated') {
//         console.log('updated');
//       console.log(document.location.href);
//     }
//   })