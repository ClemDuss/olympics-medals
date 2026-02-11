
document.addEventListener('DOMContentLoaded', function() {
    const medalsList = document.querySelector('.medals-list');
    const medalsItems = medalsList.querySelectorAll('.item');

    fetch('https://www.olympics.com/wmr-owg2026/competition/api/FRA/medals', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Medals data:', data);
        console.log(data.medalStandings.medalsTable)

        data.medalStandings.medalsTable.forEach(country => {
            const countryItem = document.createElement('div');
            countryItem.classList.add('item');
            const totalMedals = country.medalsNumber.find(o => o.type === 'Total');
            console.log(totalMedals)
            countryItem.innerHTML = `
                <span class="rank">${country.rank}</span>
                <span class="country">
                    <img src="https://gstatic.olympics.com/s3/noc/oly/3x2/${country.organisation}.png" height="16" loading="lazy" alt="Drapeau - Norvège" title="Drapeau - Norvège" aria-hidden="false" class="css-kdlghf">
                    ${country.description}
                </span>
                <span class="gold">${totalMedals.gold}</span>
                <span class="silver">${totalMedals.silver}</span>
                <span class="bronze">${totalMedals.bronze}</span>
            `;

            medalsList.appendChild(countryItem);
        });
    });
});