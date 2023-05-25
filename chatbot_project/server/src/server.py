from flask import Flask, request
from chatbot import Chatbot

app = Flask(__name__)
bot = Chatbot()

@app.route('/api/messages', methods=['GET', 'POST'])
def messages():
    if request.method == 'POST':
        message = request.json['message']
        bot_response = bot.respond_to(message)
        return {'message': bot_response}
    else:
        return {'messages': bot.get_messages()}

if __name__ == '__main__':
    app.run(port=5000)
