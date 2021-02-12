async function getGame() {
    try {
        const response = await fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating');
        const jsonResult = await response.json();
        console.log(jsonResult.results)

        for (let i = 0; i < jsonResult.results.length; i++) {
            document.querySelector('.card__games').innerHTML += `
                <div class="card">
                    <h2>${jsonResult.results[i].name}</h2>
                    <p>${jsonResult.results[i].rating}</p>
                    <p>${jsonResult.results[i].tags.length}</p>
                </div>
                `;

            if (i === 7) {
                break;
            }
        };

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlertTouser(
            'There is an error',
            'warning'
        );
        console.log(error)
    };
};
getGame();

// let border = '';
// if (!value.useThePrefix) {
 //     border = 'redBorder';
 // };
