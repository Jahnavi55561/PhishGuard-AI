
async function analyzeEmail() {

    const emailInput = document.getElementById("emailInput");
    const resultDiv = document.getElementById("result");
    const button = document.getElementById("scanButton");

    const email = emailInput.value.trim();

    // Validate email input
    if (!email) {
        resultDiv.textContent = "Please enter an email first.";
        return;
    }

    // Loading state
    button.disabled = true;
    button.textContent = "Analyzing...";
    resultDiv.textContent = "Analyzing email for potential threats...";

    try {

        // Send email to Flask backend
        const response = await fetch("/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        });

        const data = await response.json();

        // Handle backend errors
        if (!response.ok) {
            throw new Error(data.error || "Analysis failed");
        }

        // Determine risk styling
        let riskClass = "risk-low";

        if (data.risk_level === "High Risk") {
            riskClass = "risk-high";
        } else if (data.risk_level === "Medium Risk") {
            riskClass = "risk-medium";
        }

        // Safely display findings
        const findingsList = data.findings.length
            ? data.findings.map(item =>
                `<li>${escapeHTML(item)}</li>`
              ).join("")
            : "<li>No suspicious findings.</li>";

        // Safely display URLs
        const urlsList = data.urls_found.length
            ? data.urls_found.map(url =>
                `<li>${escapeHTML(url)}</li>`
              ).join("")
            : "<li>No URLs found.</li>";

        // Display analysis result
        resultDiv.innerHTML = `
            <div class="result-box">

                <h2>Analysis Result</h2>

                <h3 class="${riskClass}">
                    Risk Level: ${escapeHTML(data.risk_level)}
                </h3>

                <h3>
                    Risk Score: ${Number(data.risk_score)}/100
                </h3>

                <div class="risk-meter">
                    <div
                        class="risk-fill"
                        style="width: ${Math.min(100, Math.max(0, Number(data.risk_score)))}%"
                    ></div>
                </div>

                <h4>Detected Findings:</h4>
                <ul>
                    ${findingsList}
                </ul>

                <h4>URLs Found:</h4>
                <ul>
                    ${urlsList}
                </ul>

            </div>
        `;

        // Update dashboard statistics and history
        if (typeof updateDashboard === "function") {
            updateDashboard(data, email);
        }

    } catch (error) {

        resultDiv.textContent = error.message;

    } finally {

        // Restore button
        button.disabled = false;
        button.textContent = "Analyze Email →";

    }
}


// Prevent HTML injection
function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

}
