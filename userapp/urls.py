from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('Amaan/', views.signup, name='signup'),
    path('team/', views.team, name='team'),
    path('', views.signin, name='signin'),
    path('logout/', views.logout, name='logout'),
    path('quiz/', views.quiz, name='quiz'),
    path('quiz_post/', views.quiz_post,name='quiz_post'),
    #path('Amaan/signup_validation/', views.username_validation, name='signup_validation'),
    #path('signin_validation/', views.signin_validation, name='signin_validation'),
    path('emergencylogin/', views.emergencylogin, name='emergencylogin'),
    path('hot_or_cold/', views.hot_or_cold, name='hot_or_cold'),
    path('extra_time/', views.extra_time, name='extra_time'),
    path('vision/', views.vision, name='vision'),
    path('instruction/', views.instruction, name='instruction'),
    path('result/', views.result, name='result'),
]