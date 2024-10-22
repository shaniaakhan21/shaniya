from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'date', 'pinned', 'company_name']
    list_filter = ['pinned', 'company_name']
    search_fields = ['title', 'author']
