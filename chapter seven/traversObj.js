var anime = {
    FullMetalAlchemist : 'Adward',
    DeathNote : 'Light and L Lawliet',
    AttackOnTitan : 'Eren',
    Parasyte : 'Parasyte',
    TokyoGhoul : 'Kaneki',
    Naruto : 'Naruto'
}

console.log('DeathNote' in anime);
console.log('Anohana' in anime);

for(var i in anime){
    console.log('>>>'+i + ' : '+ anime[i]);
}

var d = 'DeathNote'
console.log('\n'+anime.d);
console.log(anime[d]);
