from pinecone import VectorEngine

def get_vector(text):
    engine = VectorEngine()
    vector = engine.get_vector(text)
    return vector
