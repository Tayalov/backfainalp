const token = localStorage.getItem("token");
const API_URL_BASE = "https://backfainalp-8.onrender.com";

async function fetchAPI(endpoint, options = {}) {
    options.headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    };
    const res = await fetch(`${API_URL_BASE}/${endpoint}`, options);
    return res.json();
}

