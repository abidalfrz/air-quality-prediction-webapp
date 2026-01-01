import pandas as pd
import os
import pickle

MODEL_PATH = os.path.join(os.path.dirname(__file__), '../artifacts/best_model.pkl')

class AirQualityPredictor:
    def __init__(self):
        with open(MODEL_PATH, 'rb') as f:
            self.model = pickle.load(f)

    def predict(self, X: pd.DataFrame):
        predictions = self.model.predict(X)
        return predictions  

    def predict_proba(self, X: pd.DataFrame):
        probabilities = self.model.predict_proba(X)
        return probabilities

predictor = AirQualityPredictor()


