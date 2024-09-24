from django.contrib import admin
from django.urls import path, include
from portfolio.views import ProjectListView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', ProjectListView.as_view(), name='project-list'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
