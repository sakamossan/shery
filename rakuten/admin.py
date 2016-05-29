# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Genre, Item


class GenreAdmin(admin.ModelAdmin):
    list_display = ('created', 'modified', 'id', 'name', 'level', 'path')
    list_filter = ('created', 'modified')
    search_fields = ('name',)
admin.site.register(Genre, GenreAdmin)


class ItemAdmin(admin.ModelAdmin):
    list_display = (
        'created',
        'modified',
        'code',
        'name',
        'catchcopy',
        'caption',
        'price',
        'review_count',
        'review_average',
        'url',
        'image_url',
        'shop_code',
        'shop_url',
    )
    list_filter = ('created', 'modified')
    search_fields = ('name',)
admin.site.register(Item, ItemAdmin)

