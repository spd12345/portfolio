function login(){
var user = '9000shakti';
var pass = '9000shakti';

var guser = document.getElementById('userid').value;
var gpass = document.getElementById('password').value;

if( user == guser && pass == gpass ){
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = "./admin/dashboard.html";
        alert ('valid input');
        
}
else{
    alert('invalid Input');
    window.location.href = "/";
}
}