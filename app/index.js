// nav functions

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// nav functions

var vid = document.getElementById("myVideo");
vid.playbackRate = 0.75;

let flag= false

function openForm(){

  
let form=document.getElementById("form")
if (flag===false){
  form.style.height="500px"
  flag=true
} else if(flag===true){
  form.style.height="0"
  flag=false
}
}