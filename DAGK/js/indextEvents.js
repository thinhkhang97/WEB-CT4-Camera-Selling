var cam1 = {
	url:"images/Canon_m6.jpg",
	name:"Cannon M6",
	description:"The Canon EOS M6 is a compact 24MP APS-C mirrorless digital camera with twin dial controls and a touch screen interface.",
	price:270,
	reduce:350
}
var product_images = document.getElementsByClassName('product_img');
var i;
for (i = 0; i < product_images.length; i++){
	product_images[i].onclick = showProduct;
}
var currentSelection = cam1;
function showProduct () {
	var cur = {
		url:this.childNodes[0].childNodes[0].src,
		name:this.previousSibling.previousSibling.childNodes[0].innerHTML,
		description:"Super HAD CCD image sensor for producing high resolution still imagery and HD 720p video. This sensor is benefited by the inclusion of a long-reaching 35x optical zoom lens, giving a 35mm-equivalent focal length range of 25-875mm."
		,price:320,
		reduce:370
	}
	currentSelection = cur;
	//alert(currentSelection.name+"\n"+currentSelection.url);
}