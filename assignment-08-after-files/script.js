// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'China',
        capital: 'Beijing',
        largestCity: 'Shanghai',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Guangdong',
                capital: 'Guangzhou',
                largestCity: 'Guangzhou',
                area: 179800,
            },
            {
                name: 'Sichuan',
                capital: 'Chengdu',
                largestCity: 'Chengdu',
                area: 485000,
            },
        ],
    },
    {
        country: 'France',
        capital: 'Paris',
        largestCity: 'Paris',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Île-de-France',
                capital: 'Paris',
                largestCity: 'Paris',
                area: 12012,
            },
            {
                name: 'Provence-Alpes-Côte d\'Azur',
                capital: 'Marseille',
                largestCity: 'Marseille',
                area: 31400,
            },
        ],
    },
]

window.onload = function() {
    const mainContent = document.getElementById('main-content');
    let html = '';
    for (const item of GEOGRAPHY_LIST) {
        html += `<h2>${item.country}</h2>`;
        html += `<p>Capital: ${item.capital}</p>`;
        html += `<p>Largest City: ${item.largestCity}</p>`;
        html += `<h3>Subdivisions:</h3>`;
        for (const sub of item.subdivisions) {
            html += `<p>${sub.name} (Capital: ${sub.capital}, Largest City: ${sub.largestCity}, Area: ${sub.area})</p>`;
        }
    }
    mainContent.innerHTML = html;
}
