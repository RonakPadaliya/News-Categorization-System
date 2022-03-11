from django.db import models

# Create your models here.
class Category(models.Model):
    news = models.CharField(max_length=1000)
    prediction = models.CharField(max_length=120)

    # def __str__(self):
    #     return self.news