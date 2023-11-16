// The code for the complex validation rules

const form = document.querySelector('#signup_form');



form.addEventListener("submit",function(e){
    // This event listener checks if passwords are matching or not
    let pw1 = document.querySelector('#password');
    let pw2 = document.querySelector('#password_repeat');


    if(pw1.value === pw2.value){return;}

    e.preventDefault();
    console.log("Passwords don't match");
    pw1.setCustomValidity("Passwords don't match!");
    pw1.value ='';
    pw2.value ='';

    pw1.style.borderColor='red';
    pw2.style.borderColor='red';
    
});


form.addEventListener("submit",function(e){
    //This event listener checks if user is over 18
    let current_year = new Date().getFullYear();
    let given_date = document.querySelector('#year').value;

    if(current_year-parseInt(given_date)>=18){return;}
    alert("You are under 18!")
    e.preventDefault();

    document.querySelector('#year').style.borderColor='red';
    

});


form.addEventListener("submit",function(e){
    // This event listener checks that the date
    //is ok for example 31-2 is not allowed obviously
    const thirty = [4,6,9,11];
    
    let month = parseInt(document.querySelector('#month').value);
    let day = parseInt(document.querySelector('#day').value);
    let year = parseInt(document.querySelector('#year').value);

    console.log(month,day,year);

    if(thirty.includes(month) && day==31){
        e.preventDefault();
        alert("this month doesn't have 31 days!");
        document.querySelector('#day').style.borderColor='red';
        document.querySelector('#month').style.borderColor='red';
        return;
    }

    if(month === 2 && (Math.abs(2000-year)%4!=0) && day>28){
        e.preventDefault();
        alert("this month has 28 days!");
        document.querySelector('#day').style.borderColor='red';
        document.querySelector('#month').style.borderColor='red';
        return;
    }

    if(month === 2 && (Math.abs(2000-year)%4===0) && day>29){
        e.preventDefault();
        alert("this month has 29 days!");
        document.querySelector('#day').style.borderColor='red';
        document.querySelector('#month').style.borderColor='red';
        return;
    }

});