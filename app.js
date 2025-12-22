function calculateROI() {
    const investment = parseFloat(document.getElementById('investment').value);
    const revenue = parseFloat(document.getElementById('revenue').value);
    const resultBox = document.getElementById('result');

    if (isNaN(investment) || isNaN(revenue) || investment <= 0) {
    resultBox.innerHTML = `<p class='error'>Please enter valid number</p>`;
    return;
    }

    const roi = ((revenue - investment) / investment) * 100;
    const message = roi >= 0
    ? `ROI: ${roi.toFixed(2)}%`
    : `ROI: ${roi.toFixed(2)}% — Caution! You're running at a loss.`;

    resultBox.innerHTML = message;
}