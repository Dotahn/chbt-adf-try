import pytest
from chatbot import Chatbot

def test_chatbot_responds():
    bot = Chatbot()
    response = bot.respond_to("Hello, bot!")
    assert response is not None

def test_chatbot_stores_messages():
    bot = Chatbot()
    bot.respond_to("Hello, bot!")
    messages = bot.get_messages()
    assert len(messages) == 1
