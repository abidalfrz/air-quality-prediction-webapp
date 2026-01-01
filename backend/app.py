# import os
# import sys

# curr_dir = os.path.dirname(os.path.abspath(__file__))
# root_dir = os.path.dirname(curr_dir)
# sys.path.append(root_dir)

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from services.preprocessing import preprocess_data
from services.predictor import predictor
import pandas as pd
import numpy as np
from schemas.schema import PredictionModel, PredictionResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # Port of Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to the Air Quality Prediction API!"}

@app.post("/predict/", response_model=PredictionResponse)
def predict(data: PredictionModel):
    try:
        input_data = pd.DataFrame([data.dict(by_alias=True)])

        preprocessed_data = preprocess_data(input_data)

        prediction = predictor.predict(preprocessed_data)[0]
        probabilities = predictor.predict_proba(preprocessed_data)[0]

        quality_mapping = {0: 'Good', 1: 'Moderate', 2: 'Poor', 3: 'Hazardous'}
        predicted_quality = quality_mapping.get(prediction)

        response = {
            'prediction': predicted_quality,
            'probabilities': float(np.max(probabilities))
        }

        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    FILE_NAME = "app"
    APPLICATION_NAME = "app"
    HOST = "127.0.0.1"
    PORT = 8000
    uvicorn.run(f"{FILE_NAME}:{APPLICATION_NAME}", host=HOST, port=PORT, reload=True)




