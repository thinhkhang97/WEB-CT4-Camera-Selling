var cam1 = {
	url:"images/Canon_m6.jpg",
	name:"Cannon M6",
	description:"The Canon EOS M6 is a compact 24MP APS-C mirrorless digital camera with twin dial controls and a touch screen interface.",
	price:270,
	reduce:350
}

var cam2 = {
	url:"images/Sony_dsc_h300.jpg",
	name:"Sony H300",
	description:"Super HAD CCD image sensor for producing high resolution still imagery and HD 720p video. This sensor is benefited by the inclusion of a long-reaching 35x optical zoom lens, giving a 35mm-equivalent focal length range of 25-875mm."
	,price:320,
	reduce:370
}

var cam3 = {
	url:"images/Canon_77d.jpg",
	name:"Cannon 77d",
	description:"Featuring an optical viewfinder with a 45-point all cross-type AF system* and fast, accurate Dual Pixel CMOS AF with phase-detection, it helps you capture the action right as it happens."
	,price:290,
	reduce:310
}
var arr = [cam1, cam2, cam3];
var loop = setInterval(SetHeaderImg, 1500);
var atImg = 0;

function SetHeaderImg () {
	var image = document.getElementsByName('header-img');
	var offer_title = document.getElementsByClassName('oferta_title');
	var oferta_text = document.getElementsByClassName('oferta_text');
	image[0].src = arr[atImg]["url"];
	offer_title[0].innerHTML = arr[atImg]["name"];
	oferta_text[0].innerHTML = arr[atImg]["description"];
	atImg = (atImg+1)%3;
}


