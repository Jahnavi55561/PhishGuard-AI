
from flask import Flask, render_template, request, jsonify
from detector import analyze_email

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.get_json()

    if not data or not data.get("email", "").strip():
        return jsonify({
            "error": "Please enter email content"
        }), 400

    email_text = data["email"]

    result = analyze_email(email_text)

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)
