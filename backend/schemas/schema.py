from pydantic import BaseModel, Field

class PredictionModel(BaseModel):
    temperature: float = Field(..., example=30.5)
    humidity: float = Field(..., example=70.0)
    pm25: float = Field(..., alias="pm2.5", example=12.5) 
    pm10: float = Field(..., example=20.0)
    no2: float = Field(..., example=15.0)
    so2: float = Field(..., example=5.0)
    co: float = Field(..., example=0.8)
    proximity_to_industrial_areas: float = Field(..., example=5.2)
    population_density: int = Field(..., example=5000)

class PredictionResponse(BaseModel):
    prediction: str
    probabilities: float

    class Config:
        from_attributes = True