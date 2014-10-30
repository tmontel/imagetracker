function Imagetracker(imageUrl) {
    this.imageUrl = imageUrl;
}

Imagetracker.prototype.show_image = function() {
    var img = document.createElement("img");
    img.src = this.imageUrl;
    document.body.appendChild(img);
    this.getInfos(); 
};

Imagetracker.prototype.getInfos = function () {
    var ref = this;
    var src = "http://www.telize.com/jsonip";
    var http = new XMLHttpRequest();
    http.open("GET", src, true);
    http.onload = function () {
        console.log(JSON.parse(http.responseText).ip);
        var obj = JSON.parse(http.responseText)
        ref.sendInfos(obj.ip);
    }
    http.send();
    
};

Imagetracker.prototype.sendInfos = function (ip) {
	var host = window.location.host;
    var referrer = new URL(document.referrer).hostname;
    if(referrer == '') { referrer = 'direct/none'; }

	var http = new XMLHttpRequest();
	http.open("GET", "http://cdn.app:3000/?ip="+ip+"&host="+host+"&referrer="+referrer+"&image="+this.imageUrl, true);
	http.onload = function () {
	    alert("complete: " + http.responseText);
	}
	http.send();
};