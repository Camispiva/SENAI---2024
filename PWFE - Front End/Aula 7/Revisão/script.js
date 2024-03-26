const apiKey ='eb1fcd935ede98a7c4bcc9f082499981';

document.getElementById('weatherForm').addEventListener('submit', function(event){
event.preventDefault();

const city = document.getElementById('cityInput').ariaValueMax.trim(); 

if(city===''){
    alert('Por favor, digite o nome da cidade');
    return;
}

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric&lang=pt_br';                                                 

fetch(apiUrl)
    .then(response => {
        if(!response.ok){
            throw new Error('Cidade não encontrada.');
        }
        return response.json();
    })
    .then(data=> {
        const location = data.name + ',' + data.sys.country;
        const temperatura = data.main.temp + 'C';
        const condition = data.wather[0].description;

        const weatherCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${location}</h5>
                        <p class="card-text">${temperatura}</p>
                        <p class="card-text">${condition}</p>
                        <p class="card-text">Umidade: ${data.main.humidity}%</p>
                    </div>
                </div>
            </div>
            `;
            document.getElementById('weatherCards').innerHTML = weatherCard;
})
.catch(error =>{
    alert(error.message);
    HTMLFormControlsCollection.error('Erro ao buscar dados:', error);
});

});