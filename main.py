from fastapi import FastAPI, UploadFile, File
from sqlalchemy.orm import Session
from database import SessionLocal, Message
from langchain_utils import process_text
from pinecone_utils import get_vector

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/upload/")
def create_upload_file(file: UploadFile = File(...), db: Session = Depends(get_db)):
    contents = await file.read()
    processed_text = process_text(contents)
    vector = get_vector(processed_text)
    message = Message(user="User", content=contents)
    db.add(message)
    db.commit()
    return {"filename": file.filename, "vector": vector}

