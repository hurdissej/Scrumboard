from rest_framework import serializers

from .models import List, Card, Board


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'

class ListSerializer(serializers.ModelSerializer):
    cards = CardSerializer(read_only=True, many=True)
    class Meta:
        model = List
        fields = '__all__'

class BoardSerializer(serializers.ModelSerializer):
    lists = ListSerializer(read_only=True, many=True)
    class Meta:
        model = Board
        fields = '__all__'


