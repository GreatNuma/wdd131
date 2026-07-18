// Strict execution listener sequence safely monitoring the DOM configuration states
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Footer Metadata Execution Engines
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // 2. Element value extraction variables
    const temperatureInCelsius = parseFloat(document.getElementById("temp").textContent);
    const windSpeedInKmH = parseFloat(document.getElementById("wind").textContent);
    const outputTarget = document.getElementById("wind-chill");

    /**
     * Criterion 7: Single-line declaration function computing standard Metric Wind Chill factor
     */
    const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

    // Criterion 7 Guard: Block calculation execution calls unless parameters match metric thresholds
    if (temperatureInCelsius <= 10 && windSpeedInKmH > 4.8) {
        const accurateWindChill = calculateWindChill(temperatureInCelsius, windSpeedInKmH);
        outputTarget.textContent = `${accurateWindChill.toFixed(1)} °C`;
    } else {
        outputTarget.textContent = "N/A";
    }
});