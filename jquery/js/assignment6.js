

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

	
var check_first_blank_field = true;


 $(document).ready(function(){

 		$("#message_first_name").hide();
  		$("#message_middle_name").hide();
  		$("#message_last_name").hide();
  		$("#message_gender").hide();
  		$("#message_date_of_birth").hide();
  		$("#message_interest").hide();
  		$("#message_email").hide();
  		$("#message_password").hide();
  		$("#message_confirm_password").hide();
  		$("#message_alternative_email").hide();
  		$("#message_mobile_no").hide();
  		$("#message_alternative_mobile_no").hide();
  		$("#message_current_address").hide();
  		$("#message_current_address_country").hide();
  		$("#message_current_address_state").hide();
  		$("#message_current_address_city").hide();
  		$("#message_current_address_zip").hide();
  		$("#message_captcha").hide();


 	


 	$("#regd_form").submit(function(){
 		var x = validateForm();
 		return x;
 	});

 	
  	$("#first_name").focusout(function(){
  		check_first_name();
  	});

  	$("#last_name").focusout(function(){
  		check_last_name();
  	});

  	$(".gender").focusout(function(){
  		check_gender();
  	});

  	$("#date_of_birth").focusout(function(){
  		check_date_of_birth();
  	});

  	$(".interest").focusout(function(){
  		check_interest();
  	});

  	$("#email").focusout(function(){
  		check_email();
  	});

  	
     	
  		

 });




function check_first_name(){
	 var first_name =  $("#first_name").val();

	 var flag = true;

	 if (first_name=="") {
		printError("#message_first_name","error_firstname","#first_name",this.check_first_blank_field);
		flag = false;
	}
	else if (!(first_name.length<=20 && first_name.length>=3)) {
		printError("#message_first_name","error_firstname_length","#first_name",this.check_first_blank_field);
		$("#first_name").focus();
		flag = false;
	}else{
		$("#message_first_name").hide();
		$("#first_name").css("border-bottom", "2px solid #34F458");
	}

	return flag;

}

function check_last_name(){
	 var last_name =  $("#last_name").val();
	 var flag = true;

	if (last_name=="") {
		printError("#message_last_name","error_lastname","#last_name",this.check_first_blank_field);
		flag = false;
		
	}else if (!(last_name.length<=20 && last_name.length>=3)) {
		printError("#message_last_name","error_lastname_length","#last_name",this.check_first_blank_field);
		flag = false;
	}else{
		$("#message_last_name").hide();
		$("#last_name").css("border-bottom", "2px solid #34F458");
	}

	return flag;

}

function check_gender(){
	var gender = $('input[name="gender"]:checked');
	var flag = true;

	if (!gender.length) {
        printError("#message_gender","error_gender","#male",this.check_first_blank_field);
		flag =  false;
	}else{
		$("#message_gender").hide();
	}

	return flag;
}

function check_date_of_birth(){
	var date_of_birth = $("#date_of_birth").val();
	var flag = true;

	if (date_of_birth=="") {
        printError("#message_date_of_birth","error_date_of_birth","#date_of_birth",this.check_first_blank_field);
		flag =  false;
	}else{
		$("#message_date_of_birth").hide();
		$("#date_of_birth").css("border-bottom", "2px solid #34F458");
	}

	return flag;
}

function check_interest(){
	var interest = $('input[name="interest"]:checked');
	var flag = true;

	if (!interest.length) {
        printError("#message_interest","error_interest","#sports",this.check_first_blank_field);
		flag =  false;
	}else{
		$("#message_interest").hide();

	}

	return flag;
}

function check_email(){
	var email = $("#email").val();
	var email_regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
	var flag = true;

	if (email=="") {
		printError("#message_email","error_email","#email",this.check_first_blank_field);
		flag =  false;
		
	}else if (email_regx.test(email) == false){
        printError("#message_email","error_email_validation","#email",this.check_first_blank_field);
		flag =  false;    
	}else{
		$("#message_email").hide();
		$("#email").css("border-bottom", "2px solid #34F458");

	}

	return flag;
}










function validateForm(){
	this.check_first_blank_field = true;
	
	var first_name_flag = check_first_name();
	var last_name_flag = check_last_name();
	var gender_flag = check_gender();
	var date_of_birth_flag = check_date_of_birth();
	var interest_flag = check_interest();
	var email_flag = check_email();

	return first_name_flag && last_name_flag && gender_flag && date_of_birth_flag && interest_flag && email_flag;  
           
}




function printError(id,msgid,fieldid,check_first_blank_field){
	$(id).html(errors[msgid]);
	$(id).show();
	$(fieldid).css("border-bottom", "2px solid #F90A0A");

	if (check_first_blank_field) {
		$(fieldid).focus();
		this.check_first_blank_field = false;
	}
	
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
	document.getElementById("date_of_birth").setAttribute("max", today);

}


function lettersOnly(input){

	var name_regex = /[^a-z]/gi;
	input.value = input.value.replace(name_regex, "");
		
}

function numbersOnly(input){

	var name_regex = /[^0-9]/gi;
	input.value = input.value.replace(name_regex, "");
	
}
















