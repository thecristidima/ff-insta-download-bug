function testDownload(request) {
    if (!request || request.msg !== "download") {
        return;
    }

    // Works in Edge, download failed on Firefox
    chrome.downloads.download({
        filename: "fbcdn kitty.jpg",
        url: "https://instagram.fotp3-2.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/136739211_314624749890852_1861711718299016124_n.jpg?tp=1&_nc_ht=instagram.fotp3-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Ep3as1SPAt0AX-00_AM&edm=ABfd0MgBAAAA&ccb=7-4&oh=8642da8886a81865cb96d555b8587b0c&oe=60BD9F9E&_nc_sid=7bff83"
    })

    // Works on all browsers
    chrome.downloads.download({
        filename: "google kitty.jpg",
        url: "https://icatcare.org/app/uploads/2018/07/Helping-your-new-cat-or-kitten-settle-in-1.png"
    })
}

chrome.runtime.onMessage.addListener(testDownload);