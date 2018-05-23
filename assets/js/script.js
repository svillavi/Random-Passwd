

function randFunction(){


	// const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
	const letterChars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numberChars ="0123456789";
	const specialChars ="!@#$%^&*";
	var pass = "";

	$('#load').text("");


	//Set password length to 8 characters long.
	var length = 8;


	if($("#letterBox").prop("checked")){
		for(var x=0; x < length; x++){
			
			var i = Math.floor(Math.random() * letterChars.length);
			pass += letterChars.charAt(i);
			
			//Display generated passwd in span element
			$(".passwdDisplay span").html(pass);
		}
	}

	else if($("#numberBox").prop("checked")){
		for(var x=0; x < length; x++){

			console.log("numberChars");
			
			var i = Math.floor(Math.random() * numberChars.length);
			pass += numberChars.charAt(i);
				//Display generated passwd in span element
	 		$(".passwdDisplay span").html(pass);
	 	}
	}

	else if($("#specialBox").prop("checked")){
		for(var x=0; x < length; x++){
			
			console.log("specialChars");
			
			var i = Math.floor(Math.random() * specialChars.length);
			pass += specialChars.charAt(i);
			
				//Display generated passwd in span element
			$(".passwdDisplay span").html(pass);
		}
	}
}

//click go button to initiate random character generation.
$("#go").on("click", function(){
	setTimeout("randFunction();", 500);
	$('#load').text("working...");
});
