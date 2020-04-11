from django.db import models

# Create your models here.


class secret(models.Model):
    value = models.CharField(max_length=120)

    def __str__(self):
        return self.value


class user(models.Model):
    g_id = models.CharField(max_length=100, default='0')
    public_access_key = models.CharField(max_length=35, default='0')
    username = models.CharField(max_length=20, default='null')
    points = models.CharField(max_length=8, default='0')
    spotify_sec = models.CharField(max_length=120, default='')
    spotify_ref = models.CharField(max_length=120, default='')

    def __str__(self):
        return self.username

    @classmethod
    def create(self, g_id, public_access_key, username, points):
        self.g_id = g_id
        self.public_access_key = public_access_key
        self.username = username
        self.points = points
        self.spotify_sec = ''
        self.spotify_ref = ''

        return user
    