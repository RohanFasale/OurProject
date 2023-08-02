/**
 * 
 */

function clearPassErrMsg() {
				document.getElementById('passErr').innerHTML="";
}

function clearNameErrMsg() {
				document.getElementById('nmErr').innerHTML="";
}

 function passCheck(y){
	
	if(y==""){
		document.getElementById("passErr").innerHTML="Password cannot be blank";
		return false;
	}
	
	if (y.length < 8) {
		document.getElementById("passErr").innerHTML="Password cannot be less than 8 characters";
                return false;
    }
    if (!/[A-Z]/.test(y)) {
		document.getElementById("passErr").innerHTML="Password must have uppercase letter";
                return false;
    }
	if (!/[a-z]/.test(y)) {
		document.getElementById("passErr").innerHTML="Password must have lowercase letter";
                return false;
    }
    if (!/[!@#$%^&*]/.test(y)) {
		document.getElementById("passErr").innerHTML="Password must have alphanumeric value";
                return false;
    }
    return true;
}

function isAlphabeticName(name) {
	if(name==""){
		alert('username cannot be empty');
		//document.getElementById("nmErr").innerHTML="Username cannot be blank";
             return false;
	}
  const namePattern = /^[A-Za-z]+$/;
  return namePattern.test(name);
}

function validate(){
	var y = document.getElementById('upass').value;
	var x = document.getElementById('uname').value;
	
	if(!isAlphabeticName(x))  {
       document.getElementById("nmErr").innerHTML="only aphabatic name";
        return false;
    }  
	
	if(!passCheck(y)){
		return false;
	}
	
	    
	return true;
}
