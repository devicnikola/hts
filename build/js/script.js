//---------------NAVIGATION-------------------//
function mobile_menu(){
    let burger = document.querySelector('.menu-burger');
    let nav = document.querySelector('nav');
    let menu = document.querySelector('.mobile-menu');
    let menuLinks = document.querySelectorAll('.mobile-menu li');

    burger.addEventListener("click",() => {
        menu.classList.toggle('menu-active');

        menuLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `menu-animation 0.5s ease forwards ${index/7}s`; 
            }            
        })

        burger.classList.toggle('active');
        nav.classList.toggle('active');
    })

}

function nav_scroll(){
    let nav = document.querySelector('nav');

    document.addEventListener('scroll', (e) => {
        e.preventDefault();

        if (window.scrollY >= 60) {
            nav.style.backgroundColor = '#333';
        }else{
            nav.style.backgroundColor = 'transparent';
        }
    })
}

//---------------FORM VALIDATION-------------------//
function reset_form(){
    window.addEventListener('load', (e) => {
        e.preventDefault();
        document.querySelector('.estimate-home form').reset(); 
    })
}

function validate_name(){  
    if (name.validity.valueMissing){
        set_invalid(name, "Required.");
        return false;
    }else{
        set_valid(name);
    }    
    
    if(name.validity.patternMismatch){
        set_invalid(name, "Name can only contain letters.");
        return false;
    }else{
        set_valid(name);
    }

    return true;
}

function validate_email() {
    

	if(email.validity.valueMissing){
		set_invalid(email, "Required.");
        return false;
    }else{
        set_valid(email);
    } 
    
    if(email.validity.typeMismatch){
        set_invalid(email, "E-mail has to be valid.");
        return false;
    }else{
        set_valid(email);
    } 
    
    return true;
}

function validate_phone(){
	if(phone.validity.valueMissing){
        set_invalid(phone, "Required.");
        return false;
    }else{
        set_valid(phone);
    } 
    
    if(phone.validity.patternMismatch){
        set_invalid(phone, "Numbers only.");
        return false;
    }else{
        set_valid(phone);
    }

    return true;
}

function validate_date(){
	if(date.validity.valueMissing){
        set_invalid(date, "Required.");
        return false;
    }else{
        set_valid(date);
    } 

    return true;
}

function validate_time(){
	if(time.validity.valueMissing){
        set_invalid(time, "Required.");
        return false;
    }else{
        set_valid(time);
    } 

    return true;
}

function validate_landscape(){
	if(landscape.validity.valueMissing){
        set_invalid(landscape, "Required.");
        return false;
    }else{
        set_valid(landscape);
    } 

    return true;
}

function validate_services(){
	if(services.validity.valueMissing){
        set_invalid(services, "Required.");
        return false;
    }else{
        set_valid(services);
    } 

    return true;
}

//---------------UTILITY FUNCTIONS-------------------//
function set_invalid(field, message){
    let label = document.querySelector(`label[for=${field.name}]`);
    
    label.nextElementSibling.innerHTML = message;
}

function set_valid(field){
    let label = document.querySelector(`label[for=${field.name}]`);

    label.nextElementSibling.innerHTML = '';
}



//---------------FUNCTION CALLS-------------------//
nav_scroll();
mobile_menu();
reset_form();

//---------------FORM FIELD CONSTANTS AND EVENT LISTENERS-------------------//
const name = document.querySelector('input[name=name]');
const email = document.querySelector('input[name=email]');
const phone = document.querySelector('input[name=phone]');
const date = document.querySelector('input[name=date]');
const time = document.querySelector('input[name=time]');
const landscape = document.querySelector('textarea[name=landscape]');
const services = document.querySelector('textarea[name=services]');

name.addEventListener('focusout', validate_name);
email.addEventListener('focusout', validate_email);
phone.addEventListener('focusout', validate_phone);
date.addEventListener('focusout', validate_date);
time.addEventListener('focusout', validate_time);
landscape.addEventListener('focusout', validate_landscape);
services.addEventListener('focusout', validate_services);