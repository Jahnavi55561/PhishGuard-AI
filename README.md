# 🛡️ PhishGuard AI
### Intelligent Phishing Email Detection System

PhishGuard AI is a web-based email security application designed to identify potentially suspicious and phishing emails. It analyzes email content, detects suspicious keywords, checks URL patterns, and assigns a risk score to help users understand potential email threats.

---
https://phishguard-ai-pbf5.onrender.com
## 🚀 Features

- **Email Threat Detection:** Analyze email content for suspicious patterns.
- **Risk Score:** Generates a risk score from 0 to 100.
- **Risk Classification:** Categorizes emails into Low Risk, Medium Risk, and High Risk.
- **Suspicious Keyword Detection:** Identifies potentially harmful words and phrases.
- **URL Analysis:** Extracts URLs and checks for suspicious domain patterns.
- **Security Dashboard:** Displays email scanning statistics.
- **Scan History:** Shows recent email analysis results during the current browser session.
- **Responsive Interface:** Clean and user-friendly dashboard.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Python | Backend programming |
| Flask | Web application framework |
| HTML5 | Frontend structure |
| CSS3 | Dashboard styling |
| JavaScript | Frontend functionality |
| Regular Expressions | Pattern detection |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
PhishGuard-AI/
│
├── app.py
├── detector.py
├── requirements.txt
├── .gitignore
│
├── dataset/
│
├── static/
│   ├── dashboard.js
│   ├── script.js
│   └── style.css
│
└── templates/
    └── index.html
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Jahnavi55561/PhishGuard-AI.git
```

### 2. Navigate to the Project Folder

```bash
cd PhishGuard-AI
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate the Virtual Environment

**Windows:**

```bash
venv\Scripts\activate
```

### 5. Install Dependencies

```bash
python -m pip install -r requirements.txt
```

### 6. Run the Application

```bash
python app.py
```

### 7. Open in Browser

```text
http://127.0.0.1:5000
```

## 🖥️ How to Use

1. Open the PhishGuard AI application in your browser.
2. Navigate to the Email Threat Scanner.
3. Paste the email content you want to analyze.
4. Click the **Analyze Email** button.
5. View the generated risk score and risk classification.
6. Review detected suspicious keywords and extracted URLs.
7. Monitor scanning statistics in the dashboard.

## 📊 Risk Classification

| Risk Score | Classification |
|---|---|
| 0–29 | Low Risk |
| 30–59 | Medium Risk |
| 60–100 | High Risk |

*Risk scores are based on heuristic detection rules and are not calibrated probabilities.*

## 🔍 Current Limitations

- Detection currently relies on predefined rules and suspicious patterns.
- Scan history is maintained in browser memory and resets when the page is refreshed.
- The system does not guarantee detection of every phishing email.
- Email sender authentication and header verification are not currently implemented.

## 🔮 Future Enhancements

- Machine learning-based phishing email classification.
- Persistent scan history using a database.
- Advanced URL and domain reputation analysis.
- Email header and sender verification.
- Improved threat intelligence integration.

## ⚠️ Disclaimer

PhishGuard AI is an educational cybersecurity project and a prototype for identifying potentially suspicious emails. It should not be used as the sole method for determining whether an email is safe or malicious.

## 👩‍💻 Developer

**Jahnavi Varma**

GitHub: [@Jahnavi55561](https://github.com/Jahnavi55561)

Project Repository: [PhishGuard AI](https://github.com/Jahnavi55561/PhishGuard-AI)

---

⭐ If you find this project interesting, consider giving the repository a star!
