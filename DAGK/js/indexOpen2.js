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

var loop = setInterval(SetHeaderImg, 2500);
var atImg2 = 1;
function SetHeaderImg () {
	var image = document.getElementsByName('new_product_img');
	var reduce = document.getElementsByClassName('reduce');
	var price = document.getElementsByClassName('price');
	var title = document.getElementsByClassName('product_title');
	image[0].src = arr[atImg2]["url"];
	reduce[0].innerHTML = arr[atImg2]["reduce"];
	price[0].innerHTML = arr[atImg2]["price"];
	title[0].innerHTML = arr[atImg2]["name"];
	atImg2 = (atImg2+1)%3;
}