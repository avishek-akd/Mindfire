

function validateForm(){

	var span = document.getElementsByClassName("msg-label")
	for (var i = 0; i < span.length; i++) {
		span[i].innerHTML = "";
	}
	document.getElementById("inputCaptcha").innerHTML="";



	var fname = document.getElementById("fname").value;
	var mname = document.getElementById("mname").value;
	var lname = document.getElementById("lname").value;
	var gender = regd_form.querySelectorAll('input[name="gender"]:checked');
	var dob = document.getElementById("dob").value;
	var date = new Date(dob);
	var interest = regd_form.querySelectorAll('input[type=checkbox]:checked');
	var email1 = document.getElementById("email1").value;
	var email2 = document.getElementById("email2").value;
	var email_regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
	var email_regx1 = /^\s*$|^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
	var pwd = document.getElementById("pwd").value;
	var pwd_regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/g;
	var cpwd = document.getElementById("cpwd").value;
	var mob1 = document.getElementById("mob1").value;
	var mob2 = document.getElementById("mob2").value;
	var mob_regx = /^[789]\d{9}$/g;
	var mob_regx1 = /^\s*$|^[789]\d{9}$/g;
	var cadd = document.getElementById("cadd").value;
	var country1 = document.getElementById("country1").value;
	var state1 = document.getElementById("state1").value;
	var city1 = document.getElementById("city1").value;
	var zip1 = document.getElementById("zip1").value;
	var zip2 = document.getElementById("zip2").value;
	var zip_regx =  /^\d{6}$/g;
	var zip_regx1 =  /^\s*$|^\d{6}$/g;
	var inputCaptcha = document.getElementById("inputCaptcha").value;
	var hidden = document.getElementById("hidden").value;




	


	if (fname=="") {
		printError("msg-fname","Fill the first name field","red");
		document.getElementById("fname").focus();
		return false;
	}if (!(fname.length<=20 && fname.length>=3)) {
		printError("msg-fname","First name length between 3 to 20 character","red");
		document.getElementById("fname").focus();
		return false;
	}if (mname.length>20) {
		printError("msg-mname","Middle name length not exceed  20 character","red");
		document.getElementById("mname").focus();
		return false;
		
	}if (lname=="") {
		printError("msg-lname","Fill the last name field","red");
		document.getElementById("lname").focus();
		return false;
		
	}if (!(lname.length<=20 && lname.length>=3)) {
		printError("msg-lname","Last name length between 3 to 20 character","red");
		document.getElementById("lname").focus();
		return false;
	}if (!gender.length) {
        printError("msg-gender","Select gender field","red");
		document.getElementById("male").focus();
		return false;
	}if (dob=="") {
        printError("msg-dob","Enter date of birth","red");
		document.getElementById("dob").focus();
		return false;
	}if (!interest.length) {
        printError("msg-interest","Select interest field","red");
		document.getElementById("sports").focus();
		return false;
	}if (email1=="") {
		printError("msg-email1","Fill the email id field","red");
		document.getElementById("email1").focus();
		return false;
		
	}if (email_regx.test(email1) == false){
        printError("msg-email1","Enter correct email id ex:abc@gmail.com","red");
		document.getElementById("email1").focus();
		return false;        
	}if (pwd=="") {
		printError("msg-pwd","Fill the password  field","red");
		document.getElementById("pwd").focus();
		return false;
		
	}if (!(pwd.length>=8 && pwd.length<=16)){
        printError("msg-pwd","password must between 8 to 16 character","red");
		document.getElementById("pwd").focus();
		return false;        
	}if (pwd_regx.test(pwd) == false){
        printError("msg-pwd","password must contain a lowercase letter, a uppercase letter, a numeric number and a special character","red");
		document.getElementById("pwd").focus();
		return false;        
	}
	if (cpwd=="") {
		printError("msg-cpwd","Fill the confirm password  field","red");
		document.getElementById("cpwd").focus();
		return false;
		
	}if (!(cpwd.length>=8 && cpwd.length<=16)){
        printError("msg-cpwd","password must between 8 to 16 character","red");
		document.getElementById("cpwd").focus();
		return false;        
	}if (pwd_regx.test(cpwd) == false){
        printError("msg-cpwd","password must contain a lowercase letter, a uppercase letter, a numeric number and a special character","red");
		document.getElementById("cpwd").focus();
		return false;        
	}if (pwd!=cpwd){
        printError("msg-cpwd","password mismatch","red");
		document.getElementById("cpwd").focus();
		return false;        
	}if (email_regx1.test(email2) == false){
        printError("msg-email2","Enter correct alternate email id ex:abc@gmail.com","red");
		document.getElementById("email2").focus();
		return false;        
	}if (mob1=="") {
		printError("msg-mob1","Fill the mobile number  field","red");
		document.getElementById("mob1").focus();
		return false;
		
	}if (mob_regx.test(mob1) == false){
        printError("msg-mob1","Enter correct mobile number","red");
		document.getElementById("mob1").focus();
		return false;        
	}if (mob_regx1.test(mob2) == false){
        printError("msg-mob2","Enter correct alternate mobile number","red");
		document.getElementById("mob2").focus();
		return false;        
	}if (cadd=="") {
		printError("msg-cadd","Fill the current address field","red");
		document.getElementById("cadd").focus();
		return false;
		
	}if (country1=="blank") {
		printError("msg-country1","Select the country field","red");
		document.getElementById("country1").focus();
		return false;
		
	}if (state1=="blank") {
		printError("msg-state1","Select the state field","red");
		document.getElementById("state1").focus();
		return false;
		
	}if (city1=="blank") {
		printError("msg-city1","Select the city field","red");
		document.getElementById("city1").focus();
		return false;
		
	}if (zip1=="") {
		printError("msg-zip1","Select the zip code field","red");
		document.getElementById("zip1").focus();
		return false;
		
	}if (parseInt(zip1)==0) {
		printError("msg-zip1","Correct the zip code field","red");
		document.getElementById("zip1").focus();
		return false;
		
	}
	if (zip_regx.test(zip1) == false) {
		printError("msg-zip1","Enter 6 digit zip code","red");
		document.getElementById("zip1").focus();
		return false;
		
	}
	if (parseInt(zip2)==0) {
		printError("msg-zip2","Correct the zip code field","red");
		document.getElementById("zip2").focus();
		return false;
		
	}if (zip_regx1.test(zip2) == false) {
		printError("msg-zip2","Enter 6 digit zip code","red");
		document.getElementById("zip2").focus();
		return false;
		
	}if (inputCaptcha=="") {
		printError("msg-captcha","Enter captcha field","red");
		document.getElementById("inputCaptcha").focus();
		return false;
		
	}if (parseInt(inputCaptcha)!=parseInt(hidden)) {
		printError("msg-captcha","Invalid captcha","red");
		document.getElementById("inputCaptcha").focus();
		return false;
		
	}

           
}




function lettersOnly(input){

	var name_regex = /[^a-z]/gi;
	input.value = input.value.replace(name_regex, "");
		
}

function numbersOnly(input){

	var name_regex = /[^0-9]/gi;
	input.value = input.value.replace(name_regex, "");
	
}


function printError(id,msg,color){
	document.getElementById(id).innerHTML=msg;
	document.getElementById(id).style.color=color;
}

function changeCaptcha(){

	var num1 = Math.floor(Math.random()*10) + 1;

	var num2 = Math.floor(Math.random()*10) + 1;

	var num3 = Math.floor(Math.random()*4) + 1;

	  if (num3==1) {
	  	var res = num1 + num2;
	    document.getElementById('hidden').value=res;
		document.getElementById('captcha').value=""+num1+ " + " +num2;
	  }
	  if (num3==2) {
	   	if (num1>=num2) {
	   		var res = num1 - num2;
	   	 	document.getElementById('hidden').value=res;
			document.getElementById('captcha').value=""+num1+ " - " +num2;
	   	} else {
	   		var res = num2 - num1;
	   	 	document.getElementById('hidden').value=res;
			document.getElementById('captcha').value=""+num2+ " - " +num1;
	   	}
	  }
	  if (num3==3) {
	    var res = num1 * num2;
	    document.getElementById('hidden').value=res;
		document.getElementById('captcha').value=""+num1+ " * " +num2;
	  }
	  if (num3==4) {
	    if(num1%num2 != 0){
	      num1 = num2*(Math.ceil(Math.random()* 4)+1);
	    }
	    var res = num1 / num2;
	    document.getElementById('hidden').value=res;
		document.getElementById('captcha').value=""+num1+ " / " +num2;
	  }


	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
 		if(dd<10){
        dd='0'+dd
    	} 
    	if(mm<10){
        mm='0'+mm
    	} 

	today = yyyy+'-'+mm+'-'+dd;
	document.getElementById("dob").setAttribute("max", today);

}













