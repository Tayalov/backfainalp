const token = localStorage.getItem("token");

async function fetchMedicines() {
    const res = await fetch("https://backfainalp-8.onrender.com/medicines", {
        headers: token ? { "Authorization": "Bearer " + token } : {}
    });
    const meds = await res.json();
    const container = document.getElementById("medicines");
    container.innerHTML = "";
    meds.forEach(m => {
        container.innerHTML += `
            <div class="medicine-card">
                <img src="${m.image}">
                <div class="info">
                    <strong>${m.name}</strong><br>
                    ${m.description}<br>
                    Price: $${m.price}<br>
                    Rating: ${m.rating || 0}
                </div>
            </div>
        `;
    });
}

fetchMedicines();



