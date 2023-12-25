//window.alert("welcome to our page");
var LoginName=document.getElementById('login-name');
var LoginEmail=document.getElementById('login-email');
var LoginContact=document.getElementById('login-cont');
var Submit=document.getElementById('submit');
var error=document.getElementById('error');
var lightbox=document.getElementById('lightbox');
var uerDetailes=[]

Submit.addEventListener('click' , function(){
 //console.log("hello");
 data()
})
function data(){
 var user={
  name:LoginName.value,
  email:LoginEmail.value,
 contact:LoginContact.value,
 };
// console.log(user);
 uerDetailes.push(user)
 console.log( uerDetailes);
 emptyData()
 
}

function emptyData(){
if(LoginName.value =="" || LoginEmail.value =="" || LoginContact.value ==""  ){
  error.style.display="block"
return false
}
else  {
  error.style.display="none";
 // window.location.href = "home.html";
 show()
  return true
}

}

function show(){
 lightbox.style.display="none"
}






