document.getElementById('firstName').addEventListener('keyup', () => {
	
	let firstNameValue = firstName.value.trim();
	
	if(!validate(firstNameValue, 2)) {
		document.getElementById('firstName').style.borderColor = "red";
		document.getElementById('firstN-small').innerText = "Please enter your firstname.";
		document.getElementById('firstN-small').style.color = "red";
	} 
	else {
		document.getElementById('firstName').style.borderColor = "green";
        document.getElementById('firstN-small').innerText = "";	
    }
});

document.getElementById('lastName').addEventListener('keyup', (e) => {
	e.preventDefault();
	let lastNameValue = lastName.value.trim();
	
	if(!validate(lastNameValue, 2)) {
		document.getElementById('lastName').style.borderColor = "red";
		document.getElementById('lastN-small').innerText = "Please enter your lastname.";
		document.getElementById('lastN-small').style.color = "red";
	} 
	else {
		document.getElementById('lastName').style.borderColor = "green";
        document.getElementById('lastN-small').innerText = "";	
    }
});

document.getElementById('email').addEventListener('keyup', (e) => {
	e.preventDefault();
	let emailValue = email.value.trim();
	
	if(!validate(emailValue ,''))  {
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('email-small').innerText = "Please enter your E-mail"; 
		document.getElementById('email-small').style.color = "red";
	
    } else if (!isEmail(emailValue)) {
		document.getElementById('email').style.borderColor = "red";
		document.getElementById('email-small').innerText = "Please enter your E-mail correct";
		document.getElementById('email-small').style.color = "red"; 
	} 
	else {
		document.getElementById('email').style.borderColor = "green";
		document.getElementById('email-small').innerText = "";
    }
});

document.getElementById('phone').addEventListener('keyup', (e) => {
	e.preventDefault();
	let phoneValue = phone.value.trim();
	
	if(!validate(phoneValue, 10)) {
		document.getElementById('phone').style.borderColor = "red";
		document.getElementById('phone-small').innerText = "Please enter your phonenumber."; 
		document.getElementById('phone-small').style.color = "red";
	} 
	else if (isNaN(phoneValue))  {
		document.getElementById('phone').style.borderColor = "red";
		document.getElementById('phone-small').innerText = "Please enter only numbers";
		document.getElementById('phone-small').style.color = "red"; 
	} 
	else {
		document.getElementById('phone').style.borderColor = "green";
		document.getElementById('phone-small').innerText = "";	
    }
});

document.getElementById('adress').addEventListener('keyup', (e) => {
	e.preventDefault();
	let adressValue = adress.value.trim();
	
	if(!validate(adressValue, 2))  {
		document.getElementById('adress').style.borderColor = "red";
		document.getElementById('adress-small').innerText = "Please enter your streetadress";
		document.getElementById('adress-small').style.color = "red";
	} 
	else {
		document.getElementById('adress').style.borderColor = "green";
		document.getElementById('adress-small').innerText = "";
    }
});

document.getElementById('zip').addEventListener('keyup', (e) => {
	e.preventDefault();
	let zipValue = zip.value.trim();
	
	if(!validate(zipValue, 5)) {
		document.getElementById('zip').style.borderColor = "red";
		document.getElementById('zip-small').innerText = "Please enter your zip code";
		document.getElementById('zip-small').style.color = "red";  
	} 
	else if (isNaN(zipValue))  {
		document.getElementById('zip').style.borderColor = "red";
		document.getElementById('zip-small').innerText = "Please enter only numbers, min 5"; 
		document.getElementById('zip-small').style.color = "red";
	} 
	else {
		document.getElementById('zip').style.borderColor = "green";
		document.getElementById('zip-small').innerText = "";
    }
});

document.getElementById('city').addEventListener('keyup', (e) => {
	e.preventDefault();
	let cityValue = city.value.trim();
	
    if(!validate(cityValue, 2)) {
		document.getElementById('city').style.borderColor = "red";
		document.getElementById('city-small').innerText = "Fyll i förnamn!";
		document.getElementById('city-small').style.color = "red";
	} 
	else {
		document.getElementById('city').style.borderColor = "green";
		document.getElementById('city-small').innerText = "";
	}
	
});

	



class User {
	constructor(firstName, lastName, email, phone, adress, zip, city ) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.adress = adress
        this.zip = zip
        this.city = city
    }
	get id() {
		return this.create_UUID
	}

}	


let users = []
let user = new User;

let inputs = document.querySelectorAll('input');
document.getElementById('button').addEventListener('click', () => {
	saveUser()
	inputs.forEach(input => input.style.removeProperty('border'))
});




// //Funktioner
function isEmail(email) {
    return  /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email);
}

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function validate(value, min) {
    if(value.length >= min)
    return true
    else
    return false
} 

function saveUser(){

	user = {
		id: create_UUID(),
	    firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        adress: document.getElementById('adress').value,
        zip: document.getElementById('zip').value,
        city: document.getElementById('city').value
	};

	users.push(user);
	
	console.log('added', {users});
	createElement();
	fillPanel();

	document.getElementById('button').disabled = true;
	document.getElementById('form').reset();

}


function createElement () {
	
	userDiv = document.createElement('div')
	flipDiv = document.createElement('div')
	panelDiv = document.createElement('div')
	
	// set name and id
	flipDiv.className = "flip"
	panelDiv.className = "panel"
	userDiv.id = `${user.id}`
	flipDiv.id = `${user.id}-flip`
	panelDiv.id = `${user.id}-panel`
	
		
	flipDiv.innerText = `${user.firstName}` + ` ${user.lastName}`

	// add elements in DOM
	var currentDiv = document.getElementById('users');
	currentDiv.appendChild(userDiv)
	userDiv.appendChild(flipDiv)
	userDiv.appendChild(panelDiv)
}

function fillPanel() {

	let idElement = document.createElement("p")
    idElement.innerText = `id: ${user.id}`

    let emailElement = document.createElement("p")
    emailElement.innerText = `E-mail: ${user.email}`
    emailElement.id = `${user.id}-email`

    let phoneElement = document.createElement("p")
    phoneElement.innerText = `Phone No: ${user.phone}`
    phoneElement.id = `${user.id}-phone`

    let adressElement = document.createElement("p")
    adressElement.innerText = `Streetadress: ${user.adress}`
    adressElement.id = `${user.id}-adress`

    let zipElement = document.createElement("p")
    zipElement.innerText = `Zip-code: ${user.adress}`
    zipElement.id = `${user.id}-zip`

    let cityElement = document.createElement("p")
	cityElement.innerText = `City: ${user.city}`
    cityElement.id = `${user.id}-city`
    
    panelDiv.appendChild(idElement)
    panelDiv.appendChild(emailElement)
    panelDiv.appendChild(phoneElement)
    panelDiv.appendChild(adressElement)
    panelDiv.appendChild(zipElement)
    panelDiv.appendChild(cityElement)
  
}



// //JQuery

	// Prevent form from refreshing website
	$("#form").submit(function(e) {
		e.preventDefault();
	});
	
	
	$("body").delegate(".flip", "click", function(){
		$('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
	});

	// The button disabled until all inputs validate
	$('#firstName, #lastName, #email, #phone, #adress, #zip, #city').bind('keyup', function() {
		if(allFilled()) $('#button').removeAttr('disabled');
		
	});
	
	function allFilled() {
		var filled = true;
		$('body input').each(function() {
			if($(this).val() == '') filled = false;
			else {$('#button').prop("disabled", true)}
		});
		return filled;

	}
