const btn = document.querySelector('.btn');
const nameEl = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const msg = document.getElementById('msg');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let forms = localStorage.getItem('forms');
    let formsObj = [];
    if(forms === null){
        formsObj = [];
    }
    else{
        formsObj = JSON.parse(forms);
    }

    const formData = { name:nameEl.value, email: email.value, phone:phone.value, gender:gender.value, msg:msg.value }
    formsObj.push(formData)
    localStorage.setItem("forms", JSON.stringify(formsObj))
    
    nameEl.value ="";
    email.value ="";
    phone.value ="";
    gender.value ="";
    msg.value ="";

    console.log(forms)
})