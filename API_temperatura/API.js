const api_key = "959f52ac85d942ae6a10fb7a95945a2e";
const base_url = "https://api.openweathermap.org/data/2.5/weather";
const city = "Monterrey";
const url = `${base_url}?q=${city}&appid=${api_key}&units=metric`;

async function obtenerTemperatura() {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.main && datos.main.temp) {
            document.getElementById("temp").innerHTML = datos.main.temp + "°C";
        } else {
            document.getElementById("temp").innerHTML = "No se pudo obtener la temperatura";
        }
    } catch (error) {
        console.error("Error al obtener la temperatura:", error);
        document.getElementById("temp").innerHTML = "Error al obtener la temperatura";
    }
}

obtenerTemperatura();
setInterval(obtenerTemperatura, 60000);
