# 🍃 Full Stack Air Quality Prediction Web Application

This repository contains a comprehensive full-stack web application designed to predict air quality based on various environmental and meteorological features. The application leverages **FastAPI** as a high-performance backend for handling machine learning model inferences and utilizes **React (Vite)** to deliver a sleek, responsive, and engaging user interface. The core model employs a Weighted Voting Classifier for robust prediction accuracy.

---

# 📌 Problem Statement

Air pollution is a critical global health issue, contributing to respiratory diseases and environmental degradation. Accurate and timely monitoring is essential for public safety and urban planning. However, air quality dynamics are highly complex, influenced by non-linear interactions between meteorological conditions (temperature, humidity), pollutants (PM2.5, NO2), and other environmental factors.

This project aims to:
- **Develop a robust machine learning classifier** capable of predicting Air Quality Indices (Good, Moderate, Poor, Hazardous) based on environmental and meteorological data.
- **Democratize access to air quality insights** by deploying the model into a user-friendly web application.
- **Optimize prediction reliability** by evaluating models using **Accuracy** and **Weighted F1-Score** to handle potential class imbalances across different air quality levels.

---

## 🧠 Features

- Real-Time Prediction: Users can input environmental and meteorological data to receive instant air quality predictions.
- User-Friendly Interface and Responsive Design: A clean and intuitive web interface.
- Responsive Design: Built with Tailwind CSS for a modern and responsive user experience.
- RESTful API: Backend built with FastAPI for efficient handling of prediction requests.

---

## 📊 Features (Dataset)

The dataset contains the following features:

| Feature Name                   | Description                                         | Type         |
|-------------------------------|-----------------------------------------------------|--------------|
| `ID`                          | Unique identifier for each record                   | Numeric      |
| `Temperature`                 | Ambient temperature in Celsius                      | Numeric      |
| `Humidity`                    | Relative humidity percentage                        | Numeric      |
| `PM2.5`                        | Concentration of particulate matter 2.5 micrometers | Numeric      |
| `PM10`                         | Concentration of particulate matter 10 micrometers  | Numeric      |
| `NO2`                          | Nitrogen dioxide concentration                      | Numeric      |
| `SO2`                          | Sulfur dioxide concentration                        | Numeric      |
| `CO`                           | Carbon monoxide concentration                       | Numeric      |
| `Proximity_to_Industrial_Area` | Distance to nearest industrial area in km          | Numeric      |
| `Population_Density`          | Number of people per square kilometer               | Numeric      |
| `Air_Quality`                 | Target variable indicating air quality            | Categorical   |

---

## 🛠️ Tech Stack

### Backend:
- **Language:** Python
- **Framework:** FastAPI
- **ASGI Server:** Uvicorn
- **Validation:** Pydantic

### Frontend:
- **Framework:** React.js (vite)
- **Styling:** Tailwind CSS v3
- **Runtime:** Node.js v22+ & npm

### Data Science & ML:
- **Data Handling:** Pandas
- **Numerical Computing:** NumPy & SciPy
- **Data Visualization:** Matplotlib & Seaborn
- **Machine Learning Algorithms:** XGBoost, LightGBM, CatBoost, scikit-learn
- **Deep Learning Framework:** PyTorch
- **Hyperparameter Optimization:** Optuna

### DevOps & Experiments:
- **Containerization:** Docker & Docker Desktop
- **Experimentation:** Jupyter Notebooks

---

## 📁 Project Structure

```bash
air-quality-prediction-webapp/
│
├── backend/
│   ├── artifacts/          # Trained ML models and preprocessors
│   ├── schemas/
│   │   └── schema.py         # Pydantic models for validation
│   ├── services/             # Pipelines and prediction logic
│   │   ├── __init__.py
│   │   ├── predictor.py      # Logic to load model and predict
│   │   └── preprocessing.py  # Logic to clean and prepare user input
│   ├── Dockerfile             # Docker configuration for backend
│   ├── requirements.txt      # Backend Python dependencies
│   └── app.py               # Main FastAPI application entry point
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Navbar.jsx   # Navigation bar component
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Home page component
│   │   │   ├── Predict.jsx     # Prediction form page component
│   │   │   └── Result.jsx      # Prediction result page component
│   │   ├── index.css          # Global layout styles
│   │   ├── App.jsx          # Main React component & Routing logic
│   │   └── main.jsx         # React entry point
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile           # Docker configuration for frontend
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── vite.config.js
│
├── data/                  
│   ├── raw/                  # Raw dataset files
│   ├── processed/            # Processed dataset files
│   └── example-submition.csv # Sample submission file
│
├── notebooks/              # Data Science workspace
│   ├── eda.ipynb           # Exploratory Data Analysis notebook
│   └── model.ipynb         # Model training and evaluation notebook
│
├── submission/              # Submission files
│   
├── .gitignore
├── .dockerignore
├── README.md
└── docker-compose.yml       # Docker Compose configuration
```
---

## 🔁 Workflow

1. **Data Collection**: The dataset contains train and test CSV files with various environmental and demographic features related to air quality.
2. **Exploratory Data Analysis (EDA)**: Conducted in `eda.ipynb` to understand data distributions and relationships.
3. **Data Preprocessing**: Handled in `eda.ipynb` and `preprocessing.py` to clean and transform data for modeling.
4. **Model Training**: Experiments with different algorithms in `model.ipynb`, leading to the selection of a Voting Classifier, combining CatBoost, SVC, and Gradient Boosting with Optimized weights using SLSQP method. This approach give the baccuracy score **92.16%** on the validation set, **93%** on the public leaderboard, and **92.33%** on the private leaderboard.
5. **Model Evaluation**: Performance metrics such as accuracy and F1-score are calculated to assess model performance.
6. **Model Deployment**: The trained model and preprocessors are saved in the `artifacts/` directory and integrated into the FastAPI app for API-based predictions and served to the React as frontend for user interaction. Then, containerized using Docker for easy deployment.

---

## 📂 Dataset & Credits

The dataset used in this project was sourced from Kaggle.  
You can access the original dataset and description through the link below:

🔗[Air Quality Dataset](https://www.kaggle.com/competitions/kcvanguard-pretest-competition/data)

We would like to acknowledge and thanks to the dataset creator for making this resource publicly available for research and educational use.

---

## 🚀 How to Run


## Clone the Repository

```bash
git clone https://github.com/abidalfrz/air-quality-prediction-webapp.git
cd air-quality-prediction-webapp
```

## Option 1: Manual Setup

In option 1, to run this project on your local machine, you need to run the backend and frontend in separate terminals.

### 1. Setup Backend (Terminal 1)

```bash
# Create Virtual Environment
python -m venv venv
source venv/bin/activate      # On Linux/macOS
venv\Scripts\activate.bat     # On Windows

cd backend

# Install Dependencies
pip install -r requirements.txt

# Run the FastAPI Server
python app.py

# The Backend API will be accessible at http://127.0.0.1:8000
```
### 2. Setup Frontend (Terminal 2)

```bash
# Navigate to Frontend Directory
cd frontend

# Install Dependencies
npm install

# Run the Vite Development Server
npm run dev 
# The Frontend will be accessible at http://localhost:5173 (or another port if 5173 is occupied)
``` 

## Option 2: Docker Setup

Make sure you have installed docker desktop in your machine.

### 1. Build and Run with Docker Compose

```bash
docker-compose up --build
```
This command will build and start both the backend and frontend services defined in the `docker-compose.yml` file.

## Access the Application

Open your web browser and navigate to the URL shown in your frontend terminal (usually http://localhost:5173).

1. Click on the "Start Prediction" button to navigate to the prediction form.
2. Fill in the required environmental and meteorological data.
3. Submit the form to receive air quality predictions.

---

