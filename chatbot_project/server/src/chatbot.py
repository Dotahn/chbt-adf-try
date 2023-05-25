from langchain import Langchain
from pinecone import VectorEngine

class Chatbot:
    def __init__(self):
        self.engine = VectorEngine()
        self.chain = Langchain()
        self.messages = []

    def respond_to(self, message):
        # Process the message using Langchain
        processed_message = self.chain.process(message)
        
        # Use the processed message to create a vector using Pinecone
        vector = self.engine.get_vector(processed_message)
        
        # Use the vector to generate a response (for simplicity, let's just return the vector for now)
        response = str(vector)
        
        # Add the message and response to the messages list
        self.messages.append((message, response))

        return response

    def get_messages(self):
        return self.messages
