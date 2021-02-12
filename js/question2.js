
document.querySelector('.loading').innerHTML = `
<img src="https://cdn.dribbble.com/users/1053052/screenshots/3600670/_____.gif"/>
`;
setTimeout(() => {
    async function getGame() {
        try {
            document.querySelector('.loading').classList.add('hide');

            const response = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
            const jsonResult = await response.json();
            console.log(jsonResult.results);

            for (let i = 0; i < jsonResult.results.length; i++) {
                document.querySelector('.card__games').innerHTML += `
                <div class="card">
                    <h2>Name: ${jsonResult.results[i].name}</h2>
                    <p>Rating: ${jsonResult.results[i].rating}</p>
                    <p>Number of tags: ${jsonResult.results[i].tags.length}</p>
                </div>
                `;

                if (i === 7) {
                    break;
                };
            };

        } catch (error) {
            document.querySelector('.alert').innerHTML = showAlertTouser(
                'There is an error',
                'warning'
            );
            console.log(error)

        } finally {
            setTimeout(() => {
                document.querySelector('.alert').innerHTML = '';
                document.querySelector('.loading').classList.add('hide');
            }, 3000);
        }
    };

    getGame();
}, 3000);

