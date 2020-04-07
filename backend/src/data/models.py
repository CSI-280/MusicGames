from django.db import models

# Create your models here.


class article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()

    def __str__(self):
        return self.title


class secret(models.Model):
    value = models.CharField(max_length=120)

    def __str__(self):
        return self.value