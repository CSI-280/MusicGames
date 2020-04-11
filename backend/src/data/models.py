from django.db import models

# Create your models here.


class secret(models.Model):
    value = models.CharField(max_length=120)

    def __str__(self):
        return self.value


class user(models.Model):
    db_id = models.CharField(max_length=30)
    public_access_key = models.CharField(max_length=35)
    username = models.CharField(max_length=20)
    points = models.CharField(max_length=20)

    def __str__(self):
        return self.db_id

    @classmethod
    def create(self, db_id, public_access_key, username, points):
        self.db_id = db_id
        self.public_access_key = public_access_key
        self.username = username
        self.points = points

        return user
    