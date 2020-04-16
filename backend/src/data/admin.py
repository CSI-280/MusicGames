from django.contrib import admin

# Register your models here.
from .models import secret, user

admin.site.register(secret)
admin.site.register(user)