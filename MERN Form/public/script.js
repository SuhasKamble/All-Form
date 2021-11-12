const btn = document.querySelector(".btn");
const nameEl = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const gender = document.getElementById('gender');
const msg = document.getElementById('msg');

btn.addEventListener('click',async(e)=>{
    e.preventDefault();
    
    const data = { name:nameEl.value, email:email.value, phone:phone.value, gender:gender.value, msg:msg.value }
    const res = await fetch('http://127.0.0.1:3000/api/v1/form',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data),
    })

    const dataRes = await res.json();
    console.log(dataRes);

    nameEl.value = ""; 
    email.value = ""; 
    phone.value = ""; 
    gender.value = ""; 
    msg.value = ""; 
})