var gamer = new Gamer(0);

// Сортируем массив героев по уровню, звёздам, экипировке
gamer.heroes.sort(function(a, b){
    return (a.equip<b.equip)-(b.equip<a.equip) || (a.star<b.star)-(b.star<a.star) || (a.level<b.level)-(b.level<a.level);
} );

// Создаём блоки героев для заполнения страницы
var frame = document.getElementById("frame");

for (var i=0; i<gamer.heroes.length; i++) {
    // Создаём новый элемент и его дочек
    var hero = document.createElement("div");
    var heroName = document.createElement("div");
    var heroLevel = document.createElement("div");
    var heroStar = document.createElement("div");

    // Задаём им необходимые классы
    var gh = gamer.heroes[i];
    var hidden;
    gh.level === 0 ? hidden = " hidden" : hidden = "";
    hero.className = "hero" + " hero-" + gh.ID + " equip-" + gh.equip + hidden;

    switch(gh.equip) {
        case 1:
        case 2:
        case 4:
        case 6:
        case 8:
        case 11:
            heroName.innerHTML = gh.name;
            break;
        case 3:
        case 5:
        case 7:
        case 9:
        case 12:
            heroName.innerHTML = gh.name + " +1";
            break;
        case 10:
        case 13:
            heroName.innerHTML = gh.name + " +2";
    }
    heroName.className = "name";

    heroLevel.innerHTML = gh.level;
    heroLevel.className = "level";

    heroStar.className = "starBox";
    for (var c=0; c<gh.star; c++) {
        var star = document.createElement("div");
        star.className = "star";
        heroStar.appendChild(star);
    }

    // Собираем всё вместе
    hero.appendChild(heroName);
    hero.appendChild(heroLevel);
    hero.appendChild(heroStar);

    console.log(heroName.clientHeight);
    frame.appendChild(hero);
    if (heroName.clientHeight > 30) { heroName.className = "name fs8" }
}
