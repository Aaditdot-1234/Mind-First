from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load("anxiety_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/")
def home():
    return "Anxiety Prediction Model API"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        
        data = request.json  
        responses = data.get("responses", [])  

        if len(responses) != 7:
            return jsonify({"error": "Invalid number of responses. Must be 7 values."}), 400

        user_input = np.array(responses).reshape(1, -1)
        user_input = scaler.transform(user_input)

        prediction = model.predict(user_input)
        result = "Problems detected. Might want to take further tests." if prediction[0] == 1 else "No problems detected. No need for further evaluation!"

        return jsonify({"prediction": result})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
