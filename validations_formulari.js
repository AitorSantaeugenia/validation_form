// --------------------------------------------------------------------------------------------
//PAS DE DADES DE TOT EL FORMULARI -- Get data from form
// --------------------------------------------------------------------------------------------
function formValidation(){
		//Nick
		var uid = document.registration.userid;
		
		//Password
		var passid = document.registration.passid;
		
		//Password repetida - Repeat password
		var passid2 = document.registration.passid2;
		
		//PW per MATCH1 - Password must match1
		var pwwpm1 = document.getElementById('passw1val').value;
		//PW per MATCH2 - Password must match2
		var pwwpm2 = document.getElementById('passw2val').value;
		
		//Nom - Name
		var username = document.registration.username;
		
		//Cognom - last name
		var coname = document.registration.conamen;
		
		//Data naixament - birthdate
		var ubirth = document.registration.birthn;
		
		//DNI - DNA
		var dna = document.getElementById('dniconjo').value;

		//Direcció - Address
		var adress = document.registration.addressn;
		
		//Provincia - Country
		var ucountry = document.registration.country;
		
		//Poblacio - Town
		var utown = document.registration.townn;
		
		//Codi postal - Postal code
		var uzip = document.registration.zip;
		
		//Correu electronic - Email
		var uemail = document.registration.email;
				
		//Telefon - Telephone number
		var utelfn = document.registration.telfn;
	
	//Llamadas a funciones para validaciones - Call function validations	
	if(userid_validation(uid,5,12)){
		if(passid_validation(passid,7,12)){
			if(passid_validation2(passid2,7,12)){
				if(matchPasswordss(pwwpm1, pwwpm2)){
					if(allLetter(username)){
						if(allLetter2(coname)){
							if(birthLetter(ubirth)){
								if(dniLetter(dna)){
										if(alphanumeric(adress)){ 
											if(countryselect(ucountry)){
												if(townselect(utown)){
													if(allnumeric(uzip)){
														if(ValidateEmail(uemail)){
															if(validateTfn(utelfn)){
																//var usuari = new setAllItems(uid, passid, username, coname, ubirth, dna, adress, ucountry, utown, uzip, uemail, utelfn);
																setAllItems();
															//return true;
														}
													}
												}
											}
										}	
									} 
								}
							} 
						}
					}
				}
			}
		}
	}
	
								return false;
}
// --------------------------------------------------------------------------------------------
// Validació NICK || NO BUIT, MAX i MIN caracters || Nick validation, no empty with max and min characters
// --------------------------------------------------------------------------------------------
function userid_validation(uid,mx,my) {
		var uid_len = uid.value.length;
		if (uid_len == 0 || uid_len >= my || uid_len < mx){
			alert("El camp NICK\n- NO pot estar buit i ha de ser ENTRE "+mx+" i "+my+" paraules.");
				uid.focus();
				return false;
		}
	return true;
}
// --------------------------------------------------------------------------------------------
// Validació PASSWORD || NO BUIT, MAX i MIN caracters || Password validation, no empty and with max/min characters
// --------------------------------------------------------------------------------------------
function passid_validation(passid,mx,my){
	var passid_len = passid.value.length;
	if (passid_len == 0 ||passid_len >= my || passid_len < mx){
		alert("El camp PASSWORD\n- NO pot estar buit i ha de ser ENTRE "+mx+" i "+my+" paraules.");
		passid.focus();
		return false;
}
	return true;
}
// --------------------------------------------------------------------------------------------
// Validació PASSWORD || NO BUIT, MAX i MIN caracters || Password validation, no empty and with max/min characters
// --------------------------------------------------------------------------------------------
function passid_validation2(passid2,mx,my){
	var passid_len = passid2.value.length;
	if (passid_len == 0 ||passid_len >= my || passid_len < mx){
		alert("El camp PASSWORD repetit\n- NO pot estar buit i ha de ser ENTRE "+mx+" i "+my+" paraules.");
		passid2.focus();
		return false;
}
	return true;
}
// --------------------------------------------------------------------------------------------
// MATCH les DUES PASSWORDS -- Passwords must match validaiton
// --------------------------------------------------------------------------------------------
function matchPasswordss(pwwpm1, pwwpm2){
	if(pwwpm1 != pwwpm2){
		alert("Les PASSWORD NO COINCIDEIXEN, reescriu-les");
		//pwwpm1.focus();
		return false;
	}
	return true;
	
}
// --------------------------------------------------------------------------------------------
// Validació NOM || NO BUIT -- Name validaiton
// --------------------------------------------------------------------------------------------
function allLetter(username){ 
	//alert(uname);
	var letters = /^[A-Za-z]+$/;
	//var username_lenght = username.value.length;
		/*if (username_lenght == 0){
			alert("El nom no pot estar buit.");
			username.focus();
			return false;			
		}*/
		if(username.value.match(letters)){
				return true;
			
		}else{
				alert('El camp NOM \n- NO pot estar buit.');
				username.focus();
				return false;
		}
}

// --------------------------------------------------------------------------------------------
// Validació COGNOM || NO BUIT -- Last name validation
// --------------------------------------------------------------------------------------------
function allLetter2(coname){ 
	var letters = /^[A-Za-z]+$/;

		if(coname.value.match(letters)){
				return true;
			
		}else{
				alert('El camp COGNOM \n- NO pot estar buit.');
				coname.focus();
				return false;
		}
}
// --------------------------------------------------------------------------------------------
// Validació DATA NAIXAMENT || Birthname validation
// --------------------------------------------------------------------------------------------
function birthLetter(ubirth){ 
	var birthlett = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
	
		if(ubirth.value.match(birthlett)){
			return true;
	}else{
		alert("El camp DATA DE NAIXAMENT\n-No és correcte [XX/XX/XXXX]");
		ubirth.focus();
		return false;
	}
}

// --------------------------------------------------------------------------------------------
// Validació DNI || Lletra en MAYUSCULA -- DNA validation
// --------------------------------------------------------------------------------------------
function dniLetter(dna){
	//alert(dna);
	  numero = dna.substr(0,dna.length-1);
	  letr = dna.substr(dna.length-1,1);
	  numero = numero % 23;
	  letra='TRWAGMYFPDXBNJZSQVHLCKET';
	  letra=letra.substring(numero,numero+1);
	 
		if (letra!=letr){ 
			alert('El camp DNI\n-No es correcte [0~9] i lletra MAYUS.');
				document.getElementById("dniconjo").focus();
				return false;
			}else{
				return true;
			
		}
		
	}
	
// --------------------------------------------------------------------------------------------
// Validació DIRECCIO || NO BUIT, ALL ALFANUMERICS inclòs espai i guió -- Address validation, all alphanumeric characters allowed
// --------------------------------------------------------------------------------------------
function alphanumeric(adress){ 
	var letters = /^[0-9a-zA-Z]+$/; 
	var letterlenght = adress.value.length;
	
	if(letterlenght == 0){
		alert("El camp DIRECCIÓ \n-NO pot estar buit.");
		adress.focus();
		return false;
			}else if(adress.value.match(letters)){
				alert('El camp DIRECCIÓ \n- Només caracters alfanumérics [0~9] | [aA~<zZ]. Incloure numero carrer');
				adress.focus();
				return false;
				}
				return true;
}
	
// --------------------------------------------------------------------------------------------
// Validació PROVINCIA || NO BUIT -- Country validation, no empty
// --------------------------------------------------------------------------------------------
	function countryselect(ucountry){
		if(ucountry.value == "Default"){
			alert('Selecciona una PROVÍNCIA de la llista');
			ucountry.focus();
			return false;
		}else{
			return true;
		}
	}
// --------------------------------------------------------------------------------------------
// Validació POBLACIO || NO BUIT -- Town validation, no empty
// --------------------------------------------------------------------------------------------
function townselect(utown){
	var letters = /^[A-Za-z ]+$/;
		if(utown.value.match(letters)){
				return true;
			
		}else{
				alert('El camp POBLACIO \n- NO pot estar buit.');
				utown.focus();
				return false;
		}
}
// --------------------------------------------------------------------------------------------
// Validació CODI POSTAL || NO BUIT, només números -- Postal code, no empty and only numbers
// --------------------------------------------------------------------------------------------
function allnumeric(uzip){ 
	var letters = /^[0-9]+$/;
	if(uzip.value.match(letters)){
		return true;
	}else{
		alert('El camp CODI POSTAL\n-No pot estar buit [0~9]');
		uzip.focus();
	return false;
	}
}
// --------------------------------------------------------------------------------------------
// Validació CORREU ELECTRONIC -- Email validation
// --------------------------------------------------------------------------------------------
function ValidateEmail(uemail){
	var emailletter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(uemail.value.match(emailletter)){
			return true;
	}else{
		alert("El camp EMAIL\n-No és correcte");
		uemail.focus();
		return false;
	}
}
// --------------------------------------------------------------------------------------------
// Validació TELEFON -- Spanish telephone validation
// --------------------------------------------------------------------------------------------
function validateTfn(utelfn){
	var lettersTLF = /^\d{9}$/;
		if(utelfn.value.match(lettersTLF)){
			//alert("you fucking did it");
			return true;
		}else{
			alert('El camp TELEFON\n-No pot estar buit [9 números]');
			utelfn.focus();
		return false;
		}
}