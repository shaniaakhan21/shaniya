from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)

    def __str__(self):
        return self.title
