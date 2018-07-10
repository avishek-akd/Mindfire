


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

	changeCaptcha();
	setMaxDate();

 	var currentSlide = 1;
 	var $slider = $(".slides");
 	var slideCount = $slider.children().length;
 	var slideTime = 2000;
 	var animationTime = 800;

 	setInterval(function(){
 		$slider.animate({
 			marginLeft : '-=1000px'
 		},animationTime, function(){
 			currentSlide++;
 			if(currentSlide==slideCount){
 				currentSlide = 1;
 				$(this).css("margin-left","0px")
 			}
 		});
 	},slideTime);


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
 		var form = validateForm();

 		if (form) {
 			swal("Successful", "You registered successfully!", "success");
 			
 			form = false;
 		}

 		return form;
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
  	$("#password").focusout(function(){
  		check_password();
  	});

  	$("#confirm_password").focusout(function(){
  		check_confirm_password();
  	});

  	$("#alternative_email").focusout(function(){
  		check_alternative_email();
  	});

  	$("#mobile_no").focusout(function(){
  		check_mobile_no();
  	});

  	$("#alternative_mobile_no").focusout(function(){
  		check_alternative_mobile_no();
  	});

  	$("#current_address").focusout(function(){
  		check_current_address();
  	});


  	$("#current_address_country").focusout(function(){
  		check_current_address_country();
  	});


  	$("#current_address_state").focusout(function(){
  		check_current_address_state();
  	});


  	$("#current_address_city").focusout(function(){
  		check_current_address_city();
  	});


  	$("#current_address_zip").focusout(function(){
  		check_current_address_zip();
  	});

  	$("#permanent_address_zip").focusout(function(){
  		check_permanent_address_zip();
  	});


  	$("#inputCaptcha").focusout(function(){
  		check_inputCaptcha();
  		

  	});

  	
  	$(".lettersOnly").keyup(function(){
  		lettersOnly(this)
 	});

 	$(".numbersOnly").keyup(function(){
  		numbersOnly(this)
 	});

 	$("#refresh").click(function(){
  		changeCaptchaFade();
 	});

 });




 function validateForm(){

	this.check_first_blank_field = true;
	
	var first_name_flag = check_first_name();
	var last_name_flag = check_last_name();
	var gender_flag = check_gender();
	var date_of_birth_flag = check_date_of_birth();
	var interest_flag = check_interest();
	var email_flag = check_email();
	var password_flag = check_password();
	var confirm_password_flag = check_confirm_password();
	var alternative_email_flag = check_alternative_email();
	var mobile_no_flag = check_mobile_no();
	var alternative_mobile_no_flag = check_alternative_mobile_no();
	var current_address_flag = check_current_address();
	var current_address_country_flag =  check_current_address_country();
	var current_address_state_flag = check_current_address_state();
	var current_address_city_flag = check_current_address_city();
	var current_address_zip_flag = check_current_address_zip();
	var permanent_address_zip_flag = check_permanent_address_zip();
	var inputCaptcha_flag = check_inputCaptcha();

	return first_name_flag && last_name_flag && gender_flag && date_of_birth_flag && interest_flag && email_flag && password_flag && 
	confirm_password_flag && alternative_email_flag && mobile_no_flag && alternative_mobile_no_flag && current_address_flag &&
	current_address_country_flag && current_address_state_flag && current_address_city_flag && current_address_zip_flag &&
	permanent_address_zip_flag && inputCaptcha_flag;
           
}




function check_first_name(){
	 var first_name =  $("#first_name").val();

	 var flag = true;

	 if (first_name=="") {
		printError("#message_first_name","error_firstname","#first_name",this.check_first_blank_field);
		flag = false;
	}
	else if (!(first_name.length<=20 && first_name.length>=3)) {
		printError("#message_first_name","error_firstname_length","#first_name",this.check_first_blank_field);
		flag = false;
	}else{
		hideError("#message_first_name","#first_name");
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
		hideError("#message_last_name","#last_name");
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
		hideError("#message_gender","#male");
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
		hideError("#message_date_of_birth","#date_of_birth");
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
		hideError("#message_interest","#sports");
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
		hideError("#message_email","#email");

	}

	return flag;
}

function check_password(){
	var password = $("#password").val();
	var password_regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/g;
	var flag = true;

	if (password=="") {
		printError("#message_password","error_password","#password",this.check_first_blank_field);
		flag =  false;
		
	}else if (!(password.length>=8 && password.length<=16)){
        printError("#message_password","error_password_length","#password",this.check_first_blank_field);
		flag =  false;    
	}else if (password_regx.test(password) == false){
        printError("#message_password","error_password_validation","#password",this.check_first_blank_field);
		flag =  false;      
	}else{
		hideError("#message_password","#password");
	}

	return flag;
}

function check_confirm_password(){
	var password = $("#password").val();
	var confirm_password = $("#confirm_password").val();
	var flag = true;

	if (confirm_password=="") {
		printError("#message_confirm_password","error_confirm_password","#confirm_password",this.check_first_blank_field);
		flag =  false;
		
	}else if (password!=confirm_password){
        printError("#message_confirm_password","error_password_mismatch","#confirm_password",this.check_first_blank_field);
		flag =  false;     
	}else{
		hideError("#message_confirm_password","#confirm_password");
	}

	return flag;
}

function check_alternative_email(){
	var alternative_email = $("#alternative_email").val();
	var alternative_email_regx = /^\s*$|^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
	var flag = true;

	if (alternative_email_regx.test(alternative_email) == false){
        printError("#message_alternative_email","error_alternative_email","#alternative_email",this.check_first_blank_field);
		flag =  false;     
	}else{
		$("#message_alternative_email").hide();
		$("#alternative_email").css("border-bottom", "1px solid #ccc");
	}

	return flag;
}

function check_mobile_no(){
	var mobile_no = $("#mobile_no").val();
	var mobile_no_regx = /^[789]\d{9}$/g;
	var flag = true;

	if (mobile_no=="") {
		printError("#message_mobile_no","error_mobileno","#mobile_no",this.check_first_blank_field);
		flag =  false;
		
	}else if (mobile_no_regx.test(mobile_no) == false){
        printError("#message_mobile_no","error_mobileno_validation","#mobile_no",this.check_first_blank_field);
		flag =  false;      
	}else{
		hideError("#message_mobile_no","#mobile_no");
	}

	return flag;
}

function check_alternative_mobile_no(){
	var alternative_mobile_no = $("#alternative_mobile_no").val();
	var alternative_mobile_no_regx = /^\s*$|^[789]\d{9}$/g;
	var flag = true;

	if (alternative_mobile_no_regx.test(alternative_mobile_no) == false){
        printError("#message_alternative_mobile_no","error_alternative_mobileno_validation","#alternative_mobile_no",this.check_first_blank_field);
		flag =  false;       
	}else{
		$("#message_alternative_mobile_no").hide();
		$("#alternative_mobile_no").css("border-bottom", "1px solid #ccc");
	}

	return flag;
}

function check_current_address(){
	var current_address = $("#current_address").val();
	var flag = true;

	if (current_address=="") {
		printError("#message_current_address","error_current_address","#current_address",this.check_first_blank_field);
		flag =  false;
		
	}else{
		hideError("#message_current_address","#current_address");
	}

	return flag;
}

function check_current_address_country(){
	var current_address_country = $("#current_address_country").val();
	var flag = true;

	if (current_address_country=="blank") {
		printError("#message_current_address_country","error_country","#current_address_country",this.check_first_blank_field);
		flag =  false;
		
	}else{
		hideError("#message_current_address_country","#current_address_country");
	}

	return flag;
}

function check_current_address_state(){
	var current_address_state = $("#current_address_state").val();
	var flag = true;

	if (current_address_state=="blank") {
		printError("#message_current_address_state","error_state","#current_address_state",this.check_first_blank_field);
		flag =  false;
	}else{
		hideError("#message_current_address_state","#current_address_state");
	}

	return flag;
}

function check_current_address_city(){
	var current_address_city = $("#current_address_city").val();
	var flag = true;

	if (current_address_city=="blank") {
		printError("#message_current_address_city","error_city","#current_address_city",this.check_first_blank_field);
		flag =  false;
		
	}else{
		hideError("#message_current_address_city","#current_address_city");
	}

	return flag;
}

function check_current_address_zip(){
	var current_address_zip = $("#current_address_zip").val();
	var current_address_zip_regx =  /^\d{6}$/g;
	var flag = true;

	if (current_address_zip=="") {
		printError("#message_current_address_zip","error_zip_code","#current_address_zip",this.check_first_blank_field);
		flag =  false;
		
	}else if (parseInt(current_address_zip)==0) {
		printError("#message_current_address_zip","error_zip_code_validation","#current_address_zip",this.check_first_blank_field);
		flag =  false;
		
	}
	else if (current_address_zip_regx.test(current_address_zip) == false) {
		printError("#message_current_address_zip","error_zip_code_length","#current_address_zip",this.check_first_blank_field);
		flag =  false;
		
	}else{
		hideError("#message_current_address_zip","#current_address_zip");
	}

	return flag;
}

function check_permanent_address_zip(){
	var permanent_address_zip = $("#permanent_address_zip").val();
	var permanent_address_zip_regx =  /^\s*$|^\d{6}$/g;
	var flag = true;

	if (parseInt(permanent_address_zip)==0) {
		printError("#message_permanent_address_zip","error_zip_code_validation","#permanent_address_zip",this.check_first_blank_field);
		flag =  false;
		
	}else if (permanent_address_zip_regx.test(permanent_address_zip) == false) {
		printError("#message_permanent_address_zip","error_zip_code_length","#permanent_address_zip",this.check_first_blank_field);
		flag =  false;
		
	}else{

		$("#message_permanent_address_zip").hide();
		$("#permanent_address_zip").css("border-bottom", "1px solid #ccc");
	}

	return flag;
}

function check_inputCaptcha(){
	var inputCaptcha = $("#inputCaptcha").val();
	var captcha_value = $("#captcha_value").val();
	var flag = true;

	if (inputCaptcha=="") {
		printError("#message_captcha","error_captcha","#inputCaptcha",this.check_first_blank_field);
		flag =  false;
		
	}else if (parseInt(inputCaptcha)!=parseInt(captcha_value)) {
		printError("#message_captcha","error_captcha_validation","#inputCaptcha",this.check_first_blank_field);
		flag =  false;
		
	}else{
		hideError("#message_captcha","#inputCaptcha");
	}

	return flag;
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

function hideError(msgid,fieldid){
	$(msgid).hide();
	$(fieldid).css("border-bottom", "2px solid #34F458");
	
}




function changeCaptcha(){
	var num1 = Math.floor(Math.random()*10) + 1;
	var num2 = Math.floor(Math.random()*10) + 1;
	var num3 = Math.floor(Math.random()*4) + 1;

	var captcha_value = $('#captcha_value')[0];
	var captcha = $('#captcha')[0];


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
}

function setMaxDate(){
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

function changeCaptchaFade(){
	$("#captcha").fadeOut();
	$("#captcha").fadeIn();
	changeCaptcha();
}

function lettersOnly(input){

	var name_regex = /[^a-z]/gi;
	input.value = input.value.replace(name_regex, "");
		
}

function numbersOnly(input){

	var name_regex = /[^0-9]/gi;
	input.value = input.value.replace(name_regex, "");
	
}


