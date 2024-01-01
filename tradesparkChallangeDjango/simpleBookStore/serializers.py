from rest_framework import serializers
from .models import Author, Category, Book

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    categories = CategorySerializer(many=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'categories']

    def create(self, validated_data):
        author_data = validated_data.pop('author')
        categories_data = validated_data.pop('categories')
        author, created = Author.objects.get_or_create(**author_data)
        book = Book.objects.create(author=author, **validated_data)

        for category_data in categories_data:
            category, created = Category.objects.get_or_create(**category_data)
            book.categories.add(category)
        return book
    
    def update(self, instance, validated_data):
        author_data = validated_data.pop('author')
        categories_data = validated_data.pop('categories')
        
        # Actualizar datos del autor
        author_instance, created = Author.objects.get_or_create(**author_data)
        instance.author = author_instance
        
        # Actualizar datos del libro
        instance.title = validated_data.get('title', instance.title)
        instance.save()
        
        # Actualizar categorías
        instance.categories.clear()
        for category_data in categories_data:
            category_instance, created = Category.objects.get_or_create(**category_data)
            instance.categories.add(category_instance)
        
        return instance