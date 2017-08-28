// Список героев
var heroesName = [
    "Ангелина Миресида",
    "Врачеватель Кассандра",
    "Боевой жрец Бран",
    "Эльфийка Алиссия",
    "Утопленница Самара",
    "Амазонка Геката",
    "Самурай Яси",
    "Убийца Торус",
    "Страж Лангерд",
    "Спаситель Митраэль",
    "Разрушитель Рогвор",
    "Инквизитор Рональд",
    "Инквизитор Хана",
    "Колдунья Эмилия",
    "Кристаллид Вирн",
    "Маг Урян",
    "Магистр Хидеус",
    "Нага Кертана",
    "Нимфа Эдера",
    "Ниндзя Миго",
    "Разбойница Фокси",
    "Зверг-налётчик Мяба",
    "Зверг-воин Грого",
    "Демонесса Лисхет",
    "Головорез Барбоза",
    "Гладиатор Доминатрикс",
    "Великан Иг",
    "Ведьмак Ниральт",
    "Бомбардир Бигл",
    "Арлекин Адель",
    "Пёс-призрак Джеронимо",
    "Зверг-шаман Хэш",
    "Циклопарики Бу, Го и Га",
    "Маурин Монго",
    "Эльф-лучник Логинус",
    "Вестник смерти Арзгар",
    "Дух огня Хитэ",
    "Принц наг Амок",
    "Северянка Анфиса",
    "Бессмертный Йордин",
    "Ведьмачка Кармина",
    "Циклопид Аррид",
    "Генерал Курбатов",
    "Собиратель душ Магиш",
    "Снайпер Матрёшка",
    "Одержимая Уна",
    "Некромант Кхадур",
    "Чёрная колдунья Вольха",
    "Капитан Блэйк",
    "Главарь Амбал",
    "Зельевар Тягат",
    "Убийца Кира",
    "Норак Доброхот"
];

// Список игроков
var gamers = [
    {   "name": "RecrutKGB", "level":79, "onlineStart": "2:15", "onlineFinish": "18:00", "heroes": [
            [   1,  0,  1   ],  // Ангелина Миресида
            [   10, 79, 1   ],  // Врачеватель Кассандра
            [   10, 79, 5   ],  // Боевой жрец Бран
            [   6,  79, 5   ],  // Эльфийка Алиссия
            [   6,  79, 5   ],  // Утопленница Самара
            [   10, 79, 5   ],  // Амазонка Геката
            [   10, 79, 5   ],  // Самурай Яси
            [   8,  79, 3   ],  // Убийца Торус
            [   10, 79, 5   ],  // Страж Лангерд
            [   8,  79, 4   ],  // Спаситель Митраэль
            [   10, 79, 4   ],  // Разрушитель Рогвор
            [   7,  79, 4   ],  // Инквизитор Рональд
            [   8,  79, 4   ],  // Инквизитор Хана
            [   6,  79, 3   ],  // Колдунья Эмилия
            [   10, 79, 5   ],  // Кристаллид Вирн
            [   10, 79, 5   ],  // Маг Урян
            [   10, 79, 5   ],  // Магистр Хидеус
            [   8,  79, 5   ],  // Нага Кертана
            [   8,  79, 5   ],  // Нимфа Эдера
            [   6,  79, 4   ],  // Ниндзя Миго
            [   6,  79, 3   ],  // Разбойница Фокси
            [   6,  79, 5   ],  // Зверг-налётчик Мяба
            [   10, 79, 4   ],  // Зверг-воин Грого
            [   6,  79, 4   ],  // Демонесса Лисхет
            [   9,  79, 5   ],  // Головорез Барбоза
            [   1,  0,  2   ],  // Гладиатор Доминатрикс
            [   7,  79, 3   ],  // Великан Иг
            [   6,  79, 2   ],  // Ведьмак Ниральт
            [   1,  0,  3   ],  // Бомбардир Бигл
            [   10, 79, 4   ],  // Арлекин Адель
            [   1,  0,  1   ],  // Пёс-призрак Джеронимо
            [   10, 79, 4   ],  // Зверг-шаман Хэш
            [   6,  79, 5   ],  // Циклопарики Бу, Го и Га
            [   1,  0,  1   ],  // Маурин Монго
            [   1,  0,  3   ],  // Эльф-лучник Логинус
            [   10, 79, 5   ],  // Вестник смерти Арзгар
            [   10, 79, 5   ],  // Дух огня Хитэ
            [   1,  0,  3   ],  // Принц наг Амок",
            [   1,  0,  3   ],  // Северянка Анфиса
            [   10, 79, 5   ],  // Бессмертный Йордин
            [   6,  79, 4   ],  // Ведьмачка Кармина
            [   8,  79, 4   ],  // Циклопид Аррид
            [   7,  79, 4   ],  // Генерал Курбатов
            [   1,  0,  3   ],  // Собиратель душ Магиш
            [   10, 79, 5   ],  // Снайпер Матрёшка
            [   8,  79, 1   ],  // Одержимая Уна
            [   10, 79, 5   ],  // Некромант Кхадур
            [   1,  1,  1   ],  // Чёрная колдунья Вольха
            [   1,  0,  2   ],  // Капитан Блэйк
            [   8,  79, 3   ],  // Главарь Амбал
            [   1,  0,  1   ],  // Зельевар Тягат
            [   1,  0,  3   ],  // Убийца Кира
            [   1,  0,  1   ]   // Норак Доброхот
        ]
    }  // gamers[0]
] ;

// Общее колличество героев
var allHeroAmount=heroes.count();

// Структура "Игрок"
function Gamer (gamerID) {
    // Инициализируем структуру из которой будем брать данные
    var heroesInit = new HeroesInit(gamers[gamerID].heroes);
    // Имя игрока
    this.name = gamers[gamerID].name;
    // Время онлайна
    this.onlineTime = gamers[gamerID].onlineStart + " - " + gamers[gamerID].onlineFinish;
    // Активных героев
    this.heroesCount = heroesInit.heroesCount;
    // Набрано звёзд
    this.star = heroesInit.heroesStar;
    // Набрано корон
    this.crown = heroesInit.heroesCrown;
    // Герои
    this.heroes = heroesInit.heroes;
} ;

// Заполняем структуру для героев
function HeroesInit(gamerHeroes) {
    var heroesCount = 0;    // Подсчёт активных героев
    var heroesStar = 0;     // Всего звёзд
    var heroesCrown = 0;    // Всего корон
    var arr = new Array();

    for (var i=0; i<gamerHeroes.count(); i++) {
        if (gamerHeroes[i][1] !== 0) {
            heroesCount++;
            gamerHeroes[i][2] < 6 ? heroesStar++ : heroesCrown++;
        };

        arr[i] = new Hero(i,heroesName[i],gamerHeroes[i]);
    }
    this.heroes = arr;
    this.heroesCount = heroesCount;
    this.heroesStar = heroesStar;
    this.heroesCrown = heroesCrown;
} ;

function Hero(heroID,heroName,heroELS) {
    this.ID = heroID;
    this.name = heroName;
    this.equip = heroELS[0];
    this.level = heroELS[1];
    this.star = heroELS[2];
} ;