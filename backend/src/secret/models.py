from django.db import models

# Create your models here.

class secret(models.Model):
    value = models.CharField(max_length=120)

    def __str__(self):
        return self.value