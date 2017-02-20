from django.db import models

# Create your models here.
class Board(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)

    def __str__(self):
        return "Board: {}".format(self.name)

class List(models.Model):
    name = models.CharField(max_length=50)
    board = models.ForeignKey(Board, related_name="lists")

    def __str__(self):
        return "List: {}".format(self.name)

class Card(models.Model):
    title= models.CharField(max_length=100)
    description = models.CharField(max_length=100, blank=True)
    list = models.ForeignKey(List, related_name="cards")
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "Card: {}".format(self.title)