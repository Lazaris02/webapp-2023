const form = document.querySelector('#signup_form');
const pw1 = document.querySelector('#password');
const pw2 = document.querySelector('#password_repeat');
const dd = document.querySelector('#day');
const mm = document.querySelector('#month');
const yy = document.querySelector('#year');



form.addEventListener("submit",(e)=>{
// this event listener is attached to the signup form and checks if everything is
//matching the set requirements , if it is not then it prevents the form submission
    if(!checkAge() || !checkDates() || !checkPasswordCharacters() || !checkSamePassword()){
        e.preventDefault();
    }

})





function checkAge(){
    let current_year = new Date().getFullYear();
    let given_date = yy.value;

    if(current_year-parseInt(given_date)>=18){return true;}

    alert("You are under 18!");
    yy.style.borderColor='red';

    return false;
}


function checkDates(){
    // This function checks that the date
    //is ok for example 31-2 is not allowed obviously
    const thirty = [4,6,9,11];
    
    const month = parseInt(mm.value);
    const day = parseInt(dd.value);
    const year = parseInt(yy.value);

    console.log(month,day,year);

    if(thirty.includes(month) && day==31){
    
        alert("this month doesn't have 31 days!");
        dd.style.borderColor='red';
        mm.style.borderColor='red';
        return false;
    }

    if(month === 2 && (Math.abs(2000-year)%4!=0) && day>28){
        alert("this month has 28 days!");
        dd.style.borderColor='red';
        mm.style.borderColor='red';
        return false;
    }

    if(month === 2 && (Math.abs(2000-year)%4===0) && day>29){
        alert("this month has 29 days!");
        dd.style.borderColor='red';
        mm.style.borderColor='red';
        return false;
    }

    dd.style.borderColor='black';
    mm.style.borderColor='black';

    return true;
}


function checkSamePassword(){
    // This function checks if passwords are matching or not
    let pw1_value = pw1.value.trim();
    let pw2_value = pw2.value.trim();

    if(pw1_value === pw2_value){
        pw1.style.borderColor = 'black';
        pw2.style.borderColor = 'black';
        return true;
    }

    pw1.style.borderColor = 'red';
    pw2.style.borderColor = 'red';

    return false;


}

function checkPasswordCharacters(){
    //checks if password matches the requirements
    let pw_value = pw1.value;
    let regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,40}$/;

    if(regex.test(pw_value)){
        pw1.style.borderColor='black';
        return true;
    }
    
    pw1.style.borderColor='red';
    console.log('I am here!');

    return false;

}



