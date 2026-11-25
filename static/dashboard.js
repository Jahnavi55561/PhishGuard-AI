
let scanHistory = [];

function updateDashboard(result, email) {

    // Store latest scan
    scanHistory.unshift({
        email: email.substring(0, 55),
        score: result.risk_score,
        risk: result.risk_level
    });

    // Update statistics
    document.getElementById("totalScans").textContent =
        scanHistory.length;

    document.getElementById("highRisk").textContent =
        scanHistory.filter(item => item.risk === "High Risk").length;

    document.getElementById("mediumRisk").textContent =
        scanHistory.filter(item => item.risk === "Medium Risk").length;

    document.getElementById("lowRisk").textContent =
        scanHistory.filter(item => item.risk === "Low Risk").length;

    // Update history table
    const historyBody = document.getElementById("historyBody");

    historyBody.innerHTML = "";

    scanHistory.slice(0, 10).forEach(item => {

        const row = document.createElement("tr");

        const emailCell = document.createElement("td");
        emailCell.textContent = item.email;

        const scoreCell = document.createElement("td");
        scoreCell.textContent = item.score + "/100";

        const riskCell = document.createElement("td");
        riskCell.textContent = item.risk;

        if (item.risk === "High Risk") {
            riskCell.style.color = "#f87171";
        } else if (item.risk === "Medium Risk") {
            riskCell.style.color = "#fbbf24";
        } else {
            riskCell.style.color = "#4ade80";
        }

        row.appendChild(emailCell);
        row.appendChild(scoreCell);
        row.appendChild(riskCell);

        historyBody.appendChild(row);

    });
}
