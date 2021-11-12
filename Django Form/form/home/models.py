from django.db import models

# Create your models here.

class Register(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=30)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=25)
    msg = models.TextField()

    def __str__(self):
        return self.name
    
    
