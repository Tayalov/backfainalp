// function renderNavbar() {
//     const token = localStorage.getItem("token");
//     const nav = document.createElement("div");
//     nav.className = "navbar";
//     nav.innerHTML = `
//         <div><strong>MedLine</strong></div>
//         <div>
//             <a href="index.html">Home</a>
//             ${token ? `<a href="#" onclick="logout()">Logout</a>` : `<a href="login.html">Login</a> <a href="register.html">Register</a>`}
//         </div>
//     `;
//     document.body.prepend(nav);
// }

// function logout() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     window.location.href = "login.html";
// }

// renderNavbar();


function renderNavbar() {
    const token = localStorage.getItem("token");

    // Создаем navbar элемент
    const nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-lg custom-green";
    nav.innerHTML = `
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="medical.jpeg" class="header-logo" alt="Logo">
                <span class="ms-2 text-dark fw-bold">MedLine</span>
            </a>
            <div class="ms-auto">
                <a href="index.html" class="nav-link">Home</a>
                ${token 
                    ? `<a href="#" class="nav-link" onclick="logout()">Logout</a>` 
                    : `<a href="login.html" class="nav-link">Login</a> <a href="register.html" class="nav-link">Register</a>`
                }
            </div>
        </div>
    `;

    // Вставляем navbar в контейнер
    const container = document.getElementById("navbar");
    if (container) {
        container.prepend(nav);
    }
}

// Функция logout
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "login.html";
}

// Ждем загрузки страницы
window.addEventListener("DOMContentLoaded", renderNavbar);


