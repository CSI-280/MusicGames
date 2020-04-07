from django.contrib import admin

# Register your models here.
from .models import article, secret

admin.site.register(article)
admin.site.register(secret)
