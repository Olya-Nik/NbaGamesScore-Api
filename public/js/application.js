document.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('container')
    const button = document.getElementById('player')
    const input = document.getElementById('input')
    button.addEventListener('click', async (e) => {
        let respApi = await fetch(`https://www.balldontlie.io/api/v1/players?search=${input.value}`)
        let json = await respApi.json();

        container.innerHTML = templatePlayers({ data: json.data })
        
    })
    console.log( input)
    const gameButton = document.getElementById('see_games')
    gameButton && gameButton.addEventListener('click', async (e) => {
        console.log(gameButton)
        let respGame = await fetch(`https://www.balldontlie.io/api/v1/games?team_ids[]=${b.value}`)
        console.log(respGame)
    })

    // json.data.forEach(d => {
    //     let div = document.createElement("div");
    //     div.id = "div" + d.id;
    //     let href = document.createElement("a")
    //     href.href = d.id
    //     div.appendChild(href)
    //     href.innerText = d.first_name + " " + d.last_name + " " + d.position;
    //     document.body.appendChild(div);

    // })

})

//})