$(function(){
var countryOptions;
var stateOptions;
var cityOptions;

	$.getJSON('json/countries.json',function(result){
		//countryOptions+="<option value='blank'>------------Select Country------------</option>";
		$.each(result, function(key, value){

			countryOptions+="<option value='"+value.id+"'>"+value.name+"</option>";
		});
		$('#country1').html(countryOptions);
		$('#country2').html(countryOptions);
	});

	$("#country1").change(function(){
		stateOptions = null;
		var x = $(this).val();
		$.getJSON('json/states.json',function(result){
			//stateOptions+="<option value='blank'>------------Select State------------</option>";
			$.each(result, function(key,value) {
				if(x==value.country_id){
					stateOptions+="<option value='"+value.id+"'>"+value.name+"</option>";
				}
			});
			$('#state1').html(stateOptions);
		});
	});

	$("#country2").change(function(){
		stateOptions = null;
		var x = $(this).val();
		$.getJSON('json/states.json',function(result){
			//stateOptions+="<option value='blank'>------------Select State------------</option>";
			$.each(result, function(key,value) {
				if(x==value.country_id){
					stateOptions+="<option value='"+value.id+"'>"+value.name+"</option>";
				}
			});
			$('#state2').html(stateOptions);
		});
	});
	
	$("#state1").change(function(){
		var x = $(this).val();
		cityOptions = null;
		$.getJSON('json/cities.json',function(result){
			//cityOptions+="<option value='blank'>------------Select City------------</option>";
			$.each(result, function(key,value) {
				if(x==value.state_id){
					cityOptions+="<option value='"+value.id+"'>"+value.name+"</option>";
				}
			});
			$('#city1').html(cityOptions);
		});
	});

	$("#state2").change(function(){
		var x = $(this).val();
		cityOptions = null;
		$.getJSON('json/cities.json',function(result){
			//cityOptions+="<option value='blank'>------------Select City------------</option>";
			$.each(result, function(key,value) {
				if(x==value.state_id){
					cityOptions+="<option value='"+value.id+"'>"+value.name+"</option>";
				}
			});
			$('#city2').html(cityOptions);
		});
	});
});

