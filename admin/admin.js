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
    window.location.href = "/";
    alert('invalid Input');
    
}
}
// addexperence
function addexp(){
    document.getElementById("hero").innerHTML =
    "<h1> Add Experence is still under devlopment...</h1>";
}
function updresume(){
    document.getElementById("hero").innerHTML =
    "<h1> Update resume is still under devlopment...</h1>";
}
function updemail(){
    document.getElementById("hero").innerHTML =
    `<h1> Update Email | {still under devlopment}</h1><br>
    <form action="">
        <input type="email" placeholder="Enter updated Email" style = "width: 50vh; height: 5vh; border-radius: 5px; font-size: 15px; padding: 6px;" >
            <input type="submit" onclick="emailSubmit()" style="height: 7vh; border-radius: 5px; font-size: 15px; color: #fff; transition: all 0.6s ease in-out; background-color:rgb(32, 153, 204); cursor: pointer;">
    </form>
     
</body>`;
}
function profpic(){
    document.getElementById("hero").innerHTML =
    "<h1> profile pic is still under devlopment...</h1>";
}
function addskill(){
    document.getElementById("hero").innerHTML =
    "<h1> add skill is still under devlopment...</h1>";
}
function addproj(){
    document.getElementById("hero").innerHTML =
    "<h1> Add Project is still under devlopment...</h1>";
}
