from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generics import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/', include('soups.api.urls')),
    path('api_sandwhiches/', include('sandwhiches.api_sandwhiches.urls')),
    path('admin/', admin.site.urls),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
