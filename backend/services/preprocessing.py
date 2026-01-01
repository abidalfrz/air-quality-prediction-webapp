import pandas as pd
import numpy as np
import os
import pickle

SCALER_PATH = os.path.join(os.path.dirname(__file__), '../artifacts/scaler.pkl')

def preprocess_data(df):

    with open(SCALER_PATH, 'rb') as f:
        scaler = pickle.load(f)

    numeric_cols = df.select_dtypes(include=['number']).columns
    df[numeric_cols] = scaler.transform(df[numeric_cols])
    return df