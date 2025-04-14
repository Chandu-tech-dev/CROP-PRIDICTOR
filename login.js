// login Script


const login = document.getElementById("login");
const checkbox = document.getElementById("terms and consition");

login.addEventListener("click",()=>{
   var  username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
    if(checkbox.checked){
        if(username=="chandu" && password=="saarika@123")
        {
            open("index.html");
        }
    }else{
        alert("please accept the terms and conditions");
    }
})

