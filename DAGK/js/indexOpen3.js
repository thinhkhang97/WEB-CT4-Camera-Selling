var cam1={
	url:"images/LayLien/Fujifilm_instax_25.jpg",
	name:"Fujifilm 25"
}

var cam2={
	url:"images/LayLien/Fujifilm_instax_mini9.jpg",
	name:"Fujifilm mini 9"
}

var cam3={
	url:"images/LayLien/Fujifilm_instax_mini70black.jpg",
	name:"Fujifilm mini 70"
}

var arr3 = [cam1, cam2, cam3];
var loop = setInterval(SetNewCamImg, 1500);
var atImg3 = 0;
function SetNewCamImg () {
	var image = document.getElementsByName('new_cam_img');
	image[0].src = arr3[atImg]["url"];
	atImg3 = (atImg3+1)%3;
}