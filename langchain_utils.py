from langchain import Langchain

def process_text(text):
    lc = Langchain()
    processed_text = lc.process(text)
    return processed_text
