const url = "https://script.google.com/macros/s/AKfycbyR9x0JvD-BYHpO-sA4uoODIsbo_cQBCZZsX6k7L6r7NkgKPemQI6lOywVPLWafe-dB4Q/exec"
    const dados = document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        fetch(url, {method : "post", body : new FormData(dados)})
        .then(response => {
            alert("dados enviados", response)
        })
        .catch(error => {
            alert(error)
        })
    });