var cam1 = {
	url:"images/Canon_m6.jpg",
	name:"Cannon M6",
	description:"Canon EOS M6 là một máy ảnh kỹ thuật số không gương lật 24MP APS-C nhỏ gọn với các nút điều khiển quay số kép và giao diện màn hình cảm ứng.",
	price:"3500000 VND",
	reduce:"2700000 VND"
}

var cam2 = {
	url:"images/Sony_dsc_h300.jpg",
	name:"Sony H300",
	description:"Cảm biến hình ảnh CCD Super HAD để tạo hình ảnh tĩnh có độ phân giải cao và video HD 720p. Cảm biến này được hưởng lợi nhờ sự bao gồm ống kính zoom quang học 35x dài, cho độ dài tiêu cự tương đương 35mm 25-875mm."
	,price:"3500000 VND",
	reduce:"2200000 VND"
}

var cam3 = {
	url:"images/Canon_77d.jpg",
	name:"Cannon 77d",
	description:"Với một khung ngắm quang học với hệ thống lấy nét tự động ngang tất cả 45 điểm * và Dual Pixel CMOS AF nhanh, chính xác với tính năng dò pha, nó giúp bạn nắm bắt được hành động ngay khi nó xảy ra."
	,price:"3200000 VND",
	reduce:"2700000 VND"
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

function signInOnClick(){
	var userName = document.getElementsByName('userName_inp')[0].value;
	var password = document.getElementsByName('password_inp')[0].value;
	if(userName == "admin" && password == "abc123456"){
		 document.getElementsByName('btn_signIn')[0].href = "./admin/index.html";
		 alert('Đăng nhập thành công tài khoản admin');
	}
	else{
		document.getElementsByName('btn_signIn')[0].href = "index_User.html";
		alert('Đăng nhập thành công');
	}
}
