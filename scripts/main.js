// JavaScript Document
var heading = document.querySelector('h1');
heading.textContent = 'Welcome!My Bicycle Adventure World';
alert('hello!');
document.querySelector('h1').onclick=function(){
	alert('fuck you!');}
var image=document.querySelector('img');
image.onclick=function(){
	var imagesrc=image.getAttribute('src');
	if(imagesrc==='images/370.jpg'){
		image.setAttribute('src','images/371.jpg');
	}else{
		image.setAttribute('src','images/370.jpg');
	}
}
var image1=document.querySelector('img');
image1.onclick=function(){
	var image1src=image1.getAttribute('src');
	if(image1src==='images/371.jpg'){
		image1.setAttribute('src','images/372.jpg');
	}else{
		image1.setAttribute('src','images/371.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome:), ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome:), ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
