const btn = document.getElementById("btn");

btn.onclick = function() {
    chrome.runtime.sendMessage({
        msg: "download"
    });
}