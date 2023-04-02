function all_blank(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let others = document.getElementById("others").checked;
    let DOB = document.getElementById("DOB").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    let mobile = document.getElementById("mno").value;



    if(fname == "" || lname == "" || (male == false && female == false && others == false) || DOB == "" || address == "" || city == "-1" || mail == "" || pass == "" ||cpass == ""  || mno == ""){
        document.getElementById("msg").innerHTML = "Enter Your First Name"
        document.getElementById("msg1").innerHTML = "Enter Your Last Name"
        document.getElementById("msg2").innerText = "Select Gender"
        document.getElementById("msg3").innerText = "Select Date"
        document.getElementById("msg4").innerHTML = "Enter Your Address" 
        document.getElementById("msg5").innerHTML = "Select City" 
        document.getElementById("msg6").innerHTML = "Enter Your Email"
        document.getElementById("msg7").innerHTML = "Enter Password"
        document.getElementById("msg8").innerHTML = "Enter Confirm Password"
        document.getElementById("msg9").innerHTML = "Enter Mobile Number"
        return false
    }else{
        document.getElementById("msg").innerHTML = "";
        document.getElementById("msg1").innerHTML = "";
        document.getElementById("msg2").innerHTML = "";
        document.getElementById("msg3").innerHTML ="";
        document.getElementById("msg4").innerHTML ="";
        document.getElementById("msg5").innerHTML = "";
        document,getElementById("msg6").innerHTML ="";
        document,getElementById("msg7").innerHTML ="";
        document,getElementById("msg8").innerHTML ="";
        document,getElementById("msg9").innerHTML ="";
        return false
    }
} 


function hide_show_password(){
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    if(pass.type == "password" && cpass.type == "password"){
        pass.type = "text"
        cpass.type = "text"
    }else{
        pass.type = "password";
       cpass.type = "password"
    }
}