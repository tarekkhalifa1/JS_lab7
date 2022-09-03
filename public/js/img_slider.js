var images = ['html.png','css.png','js.png','php.png','python.png','c_hash.png','c++.png'];
var slider_img = document.querySelector('.slider-img');
var i = 0;
var idInterval;


function next(){
	if(idInterval) stop();
	if(i >= images.length-1) i = -1;
	i++;
	return chgImg(); 

} // end next slider function

function prev(){
	if(idInterval) stop();
	if(i <= 0) i = images.length;
	i--;
	return chgImg();

} // end previous slider function


function chgImg(){
	return slider_img.setAttribute('src', `../public/imgs/${images[i]}`);

} // end set image function to change src img


function playSlide (){
	idInterval = setInterval( play ,1500);

} // end play slider function

function play(){
	if(i >= images.length-1) i = -1;
	i++;
	return chgImg();	 

} // end play slider function

function stop() {
	clearInterval(idInterval);

} // end stop slider function
