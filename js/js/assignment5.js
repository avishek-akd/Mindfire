
var check_first_blank_field = true;

var errors = {
			error_firstname:"Fill the first name field",
			error_firstname_length:"First name length between 3 to 20 character",
			error_middlename_length:"Middle name length not exceed  20 character",
			error_lastname:"Fill the last name field",
			error_lastname_length:"Last name length between 3 to 20 character",
			error_gender:"Select gender field",
			error_date_of_birth:"Enter date of birth",
			error_interest:"Select interest field",
			error_email:"Fill the email id field",
			error_email_validation:"Enter correct email id ex:abc@gmail.com",
			error_password:"Fill the password  field",
			error_password_length:"password must between 8 to 16 character",
			error_password_validation:"password must contain a lowercase letter, a uppercase letter, a numeric number and a special character",
			error_confirm_password:"Fill the confirm password  field",
			error_password_mismatch:"password mismatch",
			error_alternative_email:"Enter correct alternate email id ex:abc@gmail.com",
			error_mobileno:"Fill the mobile number  field",
			error_mobileno_validation:"Enter correct mobile number",
			error_alternative_mobileno_validation:"Enter correct alternate mobile number",
			error_current_address:"Fill the current address field",
			error_country:"Select the country field",
			error_state:"Select the state field",
			error_city:"Select the city field",
			error_zip_code:"Fill the zip code field",
			error_zip_code_validation:"Correct the zip code field",
			error_zip_code_length:"Enter 6 digit zip code",
			error_captcha:"Enter captcha field",
			error_captcha_validation:"Invalid captcha"
		};


function validateForm(){

	this.check_first_blank_field = true;

	var span = document.getElementsByClassName("message_label")
	for (var i = 0; i < span.length; i++) {
		span[i].innerHTML = "";
	}
	var message_captcha_id = document.getElementById("message_captcha");
	message_captcha_id.innerHTML="";



	var first_name_id = document.getElementById("first_name");
	var first_name = first_name_id.value;

	var middle_name_id = document.getElementById("middle_name");
	var middle_name = middle_name_id.value;

	var last_name_id = document.getElementById("last_name");
	var last_name = last_name_id.value;

	var gender = regd_form.querySelectorAll('input[name="gender"]:checked');

	var date_of_birth_id = document.getElementById("date_of_birth");
	var date_of_birth = date_of_birth_id.value;
	var date = new Date(date_of_birth);

	var interest = regd_form.querySelectorAll('input[name="interest"]:checked');

	var email_id = document.getElementById("email");
	var email = email_id.value;
	var email_regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;

	var password_id = document.getElementById("password");
	var password = password_id.value;
	var password_regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/g;

	var confirm_password_id = document.getElementById("confirm_password");
	var confirm_password = confirm_password_id.value;

	var alternative_email_id = document.getElementById("alternative_email");
	var alternative_email = alternative_email_id.value;
	var alternative_email_regx = /^\s*$|^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
	
	var mobile_no_id = document.getElementById("mobile_no");
	var mobile_no = mobile_no_id.value;
	var mobile_no_regx = /^[789]\d{9}$/g;

	var alternative_mobile_no_id = document.getElementById("alternative_mobile_no");
	var alternative_mobile_no = alternative_mobile_no_id.value;
	var alternative_mobile_no_regx = /^\s*$|^[789]\d{9}$/g;
	
	var current_address_id = document.getElementById("current_address");
	var current_address = current_address_id.value;

	var current_address_country_id = document.getElementById("current_address_country");
	var current_address_country = current_address_country_id.value;

	var current_address_state_id = document.getElementById("current_address_state");
	var current_address_state = current_address_state_id.value;

	var current_address_city_id = document.getElementById("current_address_city");
	var current_address_city = current_address_city_id.value;

	var current_address_zip_id = document.getElementById("current_address_zip");
	var current_address_zip = current_address_zip_id.value;
	var current_address_zip_regx =  /^\d{6}$/g;

	var permanent_address_zip_id = document.getElementById("permanent_address_zip");
	var permanent_address_zip = permanent_address_zip_id.value;
	var permanent_address_zip_regx =  /^\s*$|^\d{6}$/g;

	var inputCaptcha_id = document.getElementById("inputCaptcha");
	var inputCaptcha = inputCaptcha_id.value;

	var captcha_value_id = document.getElementById("captcha_value");
	var captcha_value = captcha_value_id.value;


	var flag = true;
	

	


	if (first_name=="") {
		printError("message_first_name","error_firstname",first_name_id,this.check_first_blank_field);
		flag =  false;
	}else if (!(first_name.length<=20 && first_name.length>=3)) {
		printError("message_first_name","error_firstname_length",first_name_id,this.check_first_blank_field);
		flag =  false;
	}if (last_name=="") {
		console.log(this.check_first_blank_field);
		printError("message_last_name","error_lastname",last_name_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (!(last_name.length<=20 && last_name.length>=3)) {
		printError("message_last_name","error_lastname_length",last_name_id,this.check_first_blank_field);
		flag =  false;
	}if (!gender.length) {
        printError("message_gender","error_gender",document.getElementById("male"),this.check_first_blank_field);
		flag =  false;
	}if (date_of_birth=="") {
        printError("message_date_of_birth","error_date_of_birth",date_of_birth_id,this.check_first_blank_field);
		flag =  false;
	}if (!interest.length) {
        printError("message_interest","error_interest",document.getElementById("sports"),this.check_first_blank_field);
		flag =  false;
	}if (email=="") {
		printError("message_email","error_email",email_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (email_regx.test(email) == false){
        printError("message_email","error_email_validation",email_id,this.check_first_blank_field);
		flag =  false;    
	}if (password=="") {
		printError("message_password","error_password",password_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (!(password.length>=8 && password.length<=16)){
        printError("message_password","error_password_length",password_id,this.check_first_blank_field);
		flag =  false;    
	}else if (password_regx.test(password) == false){
        printError("message_password","error_password_validation",password_id,this.check_first_blank_field);
		flag =  false;      
	}
	if (confirm_password=="") {
		printError("message_confirm_password","error_confirm_password",confirm_password_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (password!=confirm_password){
        printError("message_confirm_password","error_password_mismatch",confirm_password_id,this.check_first_blank_field);
		flag =  false;     
	}if (alternative_email_regx.test(alternative_email) == false){
        printError("message_alternative_email","error_alternative_email",alternative_email_id,this.check_first_blank_field);
		flag =  false;     
	}if (mobile_no=="") {
		printError("message_mobile_no","error_mobileno",mobile_no_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (mobile_no_regx.test(mobile_no) == false){
        printError("message_mobile_no","error_mobileno_validation",mobile_no_id,this.check_first_blank_field);
		flag =  false;      
	}if (alternative_mobile_no_regx.test(alternative_mobile_no) == false){
        printError("message_alternative_mobile_no","error_alternative_mobileno_validation",alternative_mobile_no_id,this.check_first_blank_field);
		flag =  false;       
	}if (current_address=="") {
		printError("message_current_address","error_current_address",current_address_id,this.check_first_blank_field);
		flag =  false;
		
	}if (current_address_country=="blank") {
		printError("message_current_address_country","error_country",current_address_country_id,this.check_first_blank_field);
		flag =  false;
		
	}if (current_address_state=="blank") {
		printError("message_current_address_state","error_state",current_address_state_id,this.check_first_blank_field);
		flag =  false;
	}if (current_address_city=="blank") {
		printError("message_current_address_city","error_city",current_address_city_id,this.check_first_blank_field);
		flag =  false;
		
	}if (current_address_zip=="") {
		printError("message_current_address_zip","error_zip_code",current_address_zip_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (parseInt(current_address_zip)==0) {
		printError("message_current_address_zip","error_zip_code_validation",current_address_zip_id,this.check_first_blank_field);
		flag =  false;
		
	}
	else if (current_address_zip_regx.test(current_address_zip) == false) {
		printError("message_current_address_zip","error_zip_code_length",current_address_zip_id,this.check_first_blank_field);
		flag =  false;
		
	}
	if (parseInt(permanent_address_zip)==0) {
		printError("message_permanent_address_zip","error_zip_code_validation",permanent_address_zip_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (permanent_address_zip_regx.test(permanent_address_zip) == false) {
		printError("message_permanent_address_zip","error_zip_code_length",permanent_address_zip_id,this.check_first_blank_field);
		flag =  false;
		
	}if (inputCaptcha=="") {
		printError("message_captcha","error_captcha",inputCaptcha_id,this.check_first_blank_field);
		flag =  false;
		
	}else if (parseInt(inputCaptcha)!=parseInt(captcha_value)) {
		printError("message_captcha","error_captcha_validation",captcha_value_id,this.check_first_blank_field);
		flag =  false;
		
	}

	if (flag==true) {
		alert("Registration Completed");
	}

      return flag;     
}

function changeCaptcha(){

	var num1 = Math.floor(Math.random()*10) + 1;
	var num2 = Math.floor(Math.random()*10) + 1;
	var num3 = Math.floor(Math.random()*4) + 1;

	var captcha_value = document.getElementById('captcha_value');
	var captcha = document.getElementById('captcha');

	  if (num3==1) {
	  	var res = num1 + num2;
	    captcha_value.value=res;
		captcha.value=""+num1+ " + " +num2;
	  }
	  if (num3==2) {
	   	if (num1>=num2) {
	   		var res = num1 - num2;
	   	 	captcha_value.value=res;
			captcha.value=""+num1+ " - " +num2;
	   	} else {
	   		var res = num2 - num1;
	   	 	captcha_value.value=res;
			captcha.value=""+num2+ " - " +num1;
	   	}
	  }
	  if (num3==3) {
	    var res = num1 * num2;
	    captcha_value.value=res;
		captcha.value=""+num1+ " * " +num2;
	  }
	  if (num3==4) {
	    if(num1%num2 != 0){
	      num1 = num2*(Math.ceil(Math.random()* 4)+1);
	    }
	    var res = num1 / num2;
	    captcha_value.value=res;
		captcha.value=""+num1+ " / " +num2;
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
	$("#date_of_birth").attr("max", today);

}




function lettersOnly(input){

	var name_regex = /[^a-z]/gi;
	input.value = input.value.replace(name_regex, "");
		
}

function numbersOnly(input){

	var name_regex = /[^0-9]/gi;
	input.value = input.value.replace(name_regex, "");
	
}


function printError(id,msgid,fieldid,check_first_blank_field){
	var ele = document.getElementById(id);
	ele.innerHTML=errors[msgid];
	if (check_first_blank_field) {
		fieldid.focus();
		this.check_first_blank_field = false;
	}

}















