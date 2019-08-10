const express = require('express');
let router = express.Router();
const path = require('path')
const fetch = require('node-fetch')
const handlebars = require('express-handlebars');
const hbs = handlebars.create( {
	defaultLayout: 'layout',
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views'),
    partialsDir: path.join(__dirname, 'views'),
});

async function exposeTemplate(req, res, next) {
    const templatePlayers = await hbs.getTemplate( "views/indexIn.hbs", {
        precompiled: true
    });
    // console.log(template);
    res.tablePlayers = templatePlayers;
    
    
    next();
}
router.get('/', exposeTemplate, (req,res) => {
    res.render('index', {
        listTemplate: res.tablePlayers
    })
})

router.get('/:id', async (req,res)=> {
    let resTeam = await fetch ('https://www.balldontlie.io/api/v1/teams')
    let json = await resTeam.json()
    json.data.forEach(team => {
        if(team.id = req.params.id){
            theTeam = team
        }
    });
    console.log(req.params.id)
    let resGame = await fetch (`https://www.balldontlie.io/api/v1/games?team_id=${req.params.id}`)
    let game = await resGame.json()
    console.log(game)
    res.render('team', {
        theTeam, 
        game: game.data})
})


module.exports = router;