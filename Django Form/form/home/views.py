from django.shortcuts import render, HttpResponse, redirect

from home.models import Register

# Create your views here.
def home(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        gender = request.POST.get('gender')
        msg = request.POST.get('msg')

        if name == "" or email == "" or phone == "" or gender == "" or msg == "":
            return HttpResponse("Please fill the all field!")

        registerIns = Register(name=name, email=email, phone=phone, gender=gender, msg=msg)
        registerIns.save()
        return HttpResponse("Your form has been successfully submitted!")    
    return render(request, "index.html")
