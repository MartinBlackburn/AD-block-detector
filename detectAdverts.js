function detectAdverts() {
    //create a fake advert
    var iframe = document.createElement("iframe");
    iframe.height = "1px";
    iframe.width = "1px";
    iframe.id = "ads-text-iframe";
    iframe.src = "http://example.com/ads.html";
    
    //add advert to the body
    document.body.appendChild(iframe);
 
    //after 100ms check see if hte advert is blocked
    setTimeout(function() {
        var iframe = document.getElementById("ads-text-iframe");
        
        if (iframe.style.display == "none" || iframe.style.display == "hidden" || iframe.style.visibility == "hidden" || iframe.offsetHeight == 0) {
            //advert blocked
            iframe.remove();
            return true;
        } else {
            //advert blocked
            iframe.remove();
            return false;
        }
    }, 100);
}
