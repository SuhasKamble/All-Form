const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');
const msgEl = document.getElementById('msg');
const submitBtn = document.getElementById('submit');

const submitForm = async() =>{
    if(nameEl.value == "" || emailEl.value == "" || phoneEl.value == "" || msgEl.value==""){
        alert("Please fill the all fields");
        return;
    }
    const data = {name:nameEl.value, email:emailEl.value, phone:phoneEl.value, message:msgEl.value}

    const res = await fetch("https://otognfmsxrwlfkfnvoer.supabase.co/rest/v1/form",{

        method:"POST",
        headers:{
            "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo",
            "Bearer":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjYzNzQ2NiwiZXhwIjoxOTUyMjEzNDY2fQ.uQ5D6mLx1KgratOPmfHASUEVAOMOWeHDpeeug3jcJPo",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })

    nameEl.value = "";
    emailEl.value = "";
    phoneEl.value = "";
    msgEl.value = "";
}

submitBtn.addEventListener('click',async(e)=>{
    e.preventDefault();
    await submitForm();
    alert("Form Submiited")
})
