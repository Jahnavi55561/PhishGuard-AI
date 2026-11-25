
import re
from urllib.parse import urlparse


# Suspicious words commonly found in phishing emails
SUSPICIOUS_KEYWORDS = [
    "urgent",
    "verify your account",
    "click here",
    "free gift",
    "winner",
    "congratulations",
    "limited time",
    "account suspended",
    "password",
    "bank details",
    "confirm your identity",
    "claim your prize",
    "immediately",
    "login now"
]


def analyze_email(email_text):

    score = 0
    findings = []

    email_text = email_text.lower()

    # 1. Check suspicious keywords
    for keyword in SUSPICIOUS_KEYWORDS:

        if keyword in email_text:

            score += 8
            findings.append(
                f"Suspicious keyword detected: {keyword}"
            )

    # 2. Extract URLs
    urls = re.findall(
        r'https?://[^\s<>"\']+|www\.[^\s<>"\']+',
        email_text
    )

    suspicious_domains = []

    for url in urls:

        if url.startswith("www."):
            url = "http://" + url

        domain = urlparse(url).hostname or ""

        if domain.startswith("xn--") or domain.count("-") >= 3:
            suspicious_domains.append(domain)

        if re.search(r'\d+\.\d+\.\d+\.\d+', domain):
            suspicious_domains.append(domain)

    # 3. Report suspicious URLs
    if urls:
        findings.append(
            f"{len(urls)} URL(s) found in email"
        )

    if suspicious_domains:
        score += 25
        findings.append(
            "Potentially suspicious domain pattern detected"
        )

    # 4. Check urgency
    urgency_words = [
        "immediately",
        "within 24 hours",
        "act now",
        "account blocked"
    ]

    for word in urgency_words:

        if word in email_text:
            score += 5
            findings.append(
                f"Urgent language detected: {word}"
            )

    # Keep score between 0 and 100
    score = min(score, 100)

    # 5. Determine risk level
    if score >= 60:
        risk = "High Risk"
    elif score >= 30:
        risk = "Medium Risk"
    else:
        risk = "Low Risk"

    # 6. Final result
    if not findings:
        findings.append(
            "No suspicious patterns detected by current checks"
        )

    return {
        "risk_score": score,
        "risk_level": risk,
        "findings": findings,
        "urls_found": urls
    }
