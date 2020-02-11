from django.db import models

class Sandwhiches(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    description = models.CharField(max_length=120, default="", editable=False)

    def __str__(self):
        return self.title