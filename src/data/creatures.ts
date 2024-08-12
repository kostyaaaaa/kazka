import { Creature } from '../models/Creature.model';
import { Element } from '../types';
import {
  GeneralSkillNames,
  FireSkillNames,
  NatureSkillNames,
  LightSkillNames,
  DireSkillNames,
  WaterSkillNames,
  WindSkillNames,
  SkillNames,
} from '../models/Skill.model';
import {
  fireSkillsObject,
  natureSkillsObject,
  waterSkillsObject,
  windSkillsObject,
  direSkillsObject,
  lightSkillsObject,
  generalSkillsObject,
} from './skills';
import { arrayToObject } from '../utils';

/**
 * level 1 - price 18-25
 * level 2 - price 25-35
 * level 3 - price 45-60
 */

export const fireCreatures: Creature<Element.Fire, FireSkillNames>[] = [
  {
    name: 'Пічник',
    bio: 'Пічник — охоронець домашнього вогнища. Він постійно перебуває в печі, на печі чи за нею.',
    element: Element.Fire,
    attack: 8,
    defense: 6,
    health: 6,
    price: 20,
    skills: [fireSkillsObject[FireSkillNames['Дотик вогню']]],
    level: 1,
    maxLevel: 3,
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 1,
    },
  },
  {
    name: 'Жар-Птиця',
    bio: "У східнослов'янській народній творчості — казковий птах сонячного царства із сліпучо-золотавим, мов жар, пір'ям",
    element: Element.Fire,
    attack: 7,
    defense: 7,
    health: 8,
    price: 22,
    level: 1,
    maxLevel: 3,
    skills: [
      fireSkillsObject[FireSkillNames['Перо Жар-Птиці']],
      fireSkillsObject[FireSkillNames['Вогняна куля']],
      fireSkillsObject[FireSkillNames['Спалах']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 0,
      price: 2,
    },
  },
  {
    name: 'Дажбог',
    element: Element.Fire,
    bio: "Сонячний бог давніх слов'ян, бог Сонця, світла, розпорядник земних благ",
    level: 2,
    maxLevel: 5,
    attack: 11,
    defense: 8,
    health: 13,
    price: 32,
    skills: [
      fireSkillsObject[FireSkillNames['Вогняна куля']],
      fireSkillsObject[FireSkillNames['Дотик вогню']],
      fireSkillsObject[FireSkillNames['Спалах']],
      fireSkillsObject[FireSkillNames['Молитва Дажбога']],
      fireSkillsObject[FireSkillNames['Армагедон']],
    ],
    levelBoost: {
      attack: 1,
      defense: 2,
      health: 1,
      price: 4,
    },
  },
  {
    name: 'Перелесник',
    element: Element.Fire,
    bio: "У слов'янській міфології злий дух, що шкодить людям, набуваючи подоби їхніх близьких, уособлення небесних вогнів — метеорів і блискавок. За народними віруваннями, перелесник літає в подобі вогню з довгим слідом",
    level: 3,
    maxLevel: 5,
    attack: 17,
    defense: 14,
    health: 19,
    price: 50,
    skills: [
      fireSkillsObject[FireSkillNames['Подих Перелесника']],
      fireSkillsObject[FireSkillNames['Дотик вогню']],
      fireSkillsObject[FireSkillNames['Метеорит']],
      fireSkillsObject[FireSkillNames['Спалах']],
    ],
    levelBoost: {
      attack: 3,
      defense: 0,
      health: 2,
      price: 5,
    },
  },
  {
    name: 'Сварог',
    element: Element.Fire,
    bio: "Давньослов'янський бог вогню та ковальства",
    level: 3,
    maxLevel: 5,
    attack: 16,
    defense: 11,
    health: 25,
    price: 52,
    skills: [
      generalSkillsObject[GeneralSkillNames['Магічний Погляд']],
      fireSkillsObject[FireSkillNames['Вогняна куля']],
      fireSkillsObject[FireSkillNames['Дотик вогню']],
      fireSkillsObject[FireSkillNames['Спалах']],
      fireSkillsObject[FireSkillNames['Армагедон']],
      fireSkillsObject[FireSkillNames['Метеорит']],
    ],
    levelBoost: {
      attack: 2,
      defense: 2,
      health: 1,
      price: 5,
    },
  },
];

export const lightCreatures: Creature<Element.Light, LightSkillNames>[] = [
  {
    name: 'Покутній',
    bio: 'Охоронець покуття, божок домовий. Він оберігає святий кут у хаті, щоб у ньому не поселилися злі духи, убезпечує його від пожежі, відводить грозу.',
    element: Element.Light,
    level: 1,
    maxLevel: 4,
    attack: 7,
    defense: 5,
    health: 7,
    price: 19,
    skills: [
      lightSkillsObject[LightSkillNames['Молитва']],
      generalSkillsObject[GeneralSkillNames['Чарівний щит']],
    ],
    levelBoost: {
      attack: 0,
      defense: 1,
      health: 1,
      price: 2,
    },
  },
  {
    name: 'Знахар',
    bio: 'Носій добрих сил. Знахарі за допомогою замовляють та цілющих трав роблять людям користь, лікують від усіляких хвороб, допомагають у любовних приворотах, сприяють, а інколи й перешкоджають полюванню або рибальству, допомагають людині позбутися будь-якого виду нечистої сили',
    element: Element.Light,
    level: 1,
    maxLevel: 3,
    attack: 6,
    defense: 7,
    health: 10,
    price: 23,
    skills: [
      lightSkillsObject[LightSkillNames['Краплина Сяйва']],
      lightSkillsObject[LightSkillNames['Молитва']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 3,
    },
  },
  {
    name: 'Лель',
    bio: "Імовірно, давньослов'янський бог кохання, син Лади і Сварога. Традиційно вважається братом Лелі",
    element: Element.Light,
    level: 2,
    maxLevel: 5,
    attack: 10,
    defense: 10,
    health: 12,
    price: 32,
    skills: [
      generalSkillsObject[GeneralSkillNames['Чарівний щит']],
      lightSkillsObject[LightSkillNames['Благословення']],
      lightSkillsObject[LightSkillNames['Молитва']],
      lightSkillsObject[LightSkillNames['Небесне Світло']],
      lightSkillsObject[LightSkillNames['Світловий Вибух']],
    ],
    levelBoost: {
      attack: 2,
      defense: 1,
      health: 1,
      price: 4,
    },
  },
  {
    name: 'Ярчук',
    bio: "Міфічна істота в українських народних повір'ях — пес з вовчими іклами, якого боїться нечиста сила — відьми, чаклуни, можливо навіть диявол",
    element: Element.Light,
    level: 3,
    maxLevel: 5,
    attack: 15,
    defense: 11,
    health: 20,
    price: 46,
    skills: [
      lightSkillsObject[LightSkillNames['Світловий Вибух']],
      lightSkillsObject[LightSkillNames['Молитва']],
      generalSkillsObject[GeneralSkillNames['Удар блискавкою']],
      lightSkillsObject[LightSkillNames['Осяяння Ярчука']],
      lightSkillsObject[LightSkillNames['Благословення']],
      lightSkillsObject[LightSkillNames['Небесне Світло']],
      lightSkillsObject[LightSkillNames['Аура Світу']],
    ],
    levelBoost: {
      attack: 2,
      defense: 2,
      health: 2,
      price: 6,
    },
  },
  {
    name: 'Білобог',
    bio: "У дохристиянських віруваннях творець води, землі й світла, головний бог білого дня, щастя, добра, багатства, здоров'я і плодючості",
    element: Element.Light,
    level: 3,
    maxLevel: 5,
    attack: 15,
    defense: 18,
    health: 20,
    price: 53,
    skills: [
      lightSkillsObject[LightSkillNames['Світловий Вибух']],
      lightSkillsObject[LightSkillNames['Благословення']],
      lightSkillsObject[LightSkillNames['Молитва']],
      lightSkillsObject[LightSkillNames['Аура Світу']],
      lightSkillsObject[LightSkillNames['Слово Білобога']],
      lightSkillsObject[LightSkillNames['Небесне Світло']],
    ],
    levelBoost: {
      attack: 2,
      defense: 1,
      health: 2,
      price: 5,
    },
  },
];

export const direCreatures: Creature<Element.Dire, DireSkillNames>[] = [
  {
    name: 'Бабай',
    bio: "Фольклорний персонаж у слов'янських народів, нічний дух, що викрадає дітей, які не засинають вчасно.",
    element: Element.Dire,
    level: 1,
    maxLevel: 2,
    attack: 6,
    defense: 7,
    health: 6,
    price: 19,
    skills: [direSkillsObject[DireSkillNames['Лихоманка']]],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 3,
    },
  },
  {
    name: 'Вовкулака',
    bio: 'Міфічна істота, людина, що перекидається або перетворена на вовка, тобто перевертень.',
    element: Element.Dire,
    level: 1,
    maxLevel: 3,
    attack: 7,
    defense: 9,
    health: 7,
    price: 23,
    skills: [
      direSkillsObject[DireSkillNames['Тіньова Завіса']],
      direSkillsObject[DireSkillNames['Примарний Подих']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 3,
    },
  },
  {
    name: 'Баба-Яга',
    bio: "Міфологічна персонажка слов'янського фольклору. Традиційним зображенням є стара страшна жінка, атрибутами якої є хатка на курячих ніжках і ступа.",
    element: Element.Dire,
    level: 2,
    maxLevel: 5,
    attack: 12,
    defense: 8,
    health: 13,
    price: 33,
    skills: [
      direSkillsObject[DireSkillNames['Лихоманка']],
      direSkillsObject[DireSkillNames['Примарний Подих']],
      direSkillsObject[DireSkillNames['Тіньова Завіса']],
      direSkillsObject[DireSkillNames['Нечиста сила']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 3,
    },
  },
  {
    name: 'Потерча',
    bio: "В українській міфології так називають дітей, які померли нехрещеними. Ці істоти є злими та навіть демонічними. У книжках можна знайти ще іншу назву 'потерчук' або 'страдча'",
    element: Element.Dire,
    level: 2,
    maxLevel: 5,
    attack: 9,
    defense: 12,
    health: 13,
    price: 34,
    skills: [
      direSkillsObject[DireSkillNames['Лихоманка']],
      direSkillsObject[DireSkillNames['Примарний Подих']],
      direSkillsObject[DireSkillNames['Тіньова Завіса']],
      direSkillsObject[DireSkillNames['Сміх потерчат']],
    ],
    levelBoost: {
      attack: 1,
      defense: 2,
      health: 0,
      price: 3,
    },
  },
  {
    name: 'Вій',
    bio: 'Персонаж української демонології, що володіє довгими й густими віями (повіками), через які нічого не бачить. Коли нечиста сила піднімає вії, його погляд вбивчий і руйнівний.',
    element: Element.Dire,
    level: 3,
    maxLevel: 5,
    attack: 18,
    defense: 14,
    health: 18,
    price: 50,
    skills: [
      direSkillsObject[DireSkillNames['Лихоманка']],
      direSkillsObject[DireSkillNames['Примарний Подих']],
      direSkillsObject[DireSkillNames['Тіньова Завіса']],
      direSkillsObject[DireSkillNames['Нечиста сила']],
      direSkillsObject[DireSkillNames['Чорний Клинок']],
    ],
    levelBoost: {
      attack: 2,
      defense: 3,
      health: 1,
      price: 6,
    },
  },
  {
    name: 'Чорнобог',
    bio: "Чорнобо́г — у язичницькій міфології слов'ян персонаж, який приносить нещастя, творець усього злого та шкідливого.",
    element: Element.Dire,
    level: 3,
    maxLevel: 5,
    attack: 15,
    defense: 16,
    health: 24,
    price: 55,
    skills: [
      direSkillsObject[DireSkillNames['Ніч Чорнобога']],
      direSkillsObject[DireSkillNames['Нечиста сила']],
      direSkillsObject[DireSkillNames['Поглинання Світла']],
      direSkillsObject[DireSkillNames['Лихоманка']],
      direSkillsObject[DireSkillNames['Примарний Подих']],
      direSkillsObject[DireSkillNames['Тіньова Завіса']],
    ],
    levelBoost: {
      attack: 1,
      defense: 2,
      health: 2,
      price: 5,
    },
  },
];

export const windCreatures: Creature<Element.Wind, WindSkillNames>[] = [
  {
    name: 'Вихор',
    bio: "Ця міфічна істота більш звична для мешканців Криму та Приазов'я. За назвою очевидно, що це вітер, буря",
    element: Element.Wind,
    level: 1,
    maxLevel: 5,
    attack: 9,
    defense: 7,
    health: 7,
    price: 23,
    skills: [
      windSkillsObject[WindSkillNames['Удар вітру']],
      windSkillsObject[WindSkillNames['Подих вітру']],
    ],
    levelBoost: {
      attack: 1,
      defense: 0,
      health: 1,
      price: 2,
    },
  },
  {
    name: 'Повітруля',
    bio: 'Повітруля ― донька гірських вітрів. Вона надзвичайно вродлива, вміє літати і знається на цілющих травах',
    element: Element.Wind,
    level: 1,
    maxLevel: 4,
    attack: 8,
    defense: 7,
    health: 9,
    price: 24,
    skills: [
      windSkillsObject[WindSkillNames['Удар вітру']],
      windSkillsObject[WindSkillNames['Захист вітру']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 3,
    },
  },
  {
    name: 'Босоркун',
    bio: 'Гірський дух, упир, який піднімає сильний вітер і літає з цим вітром невидимим. Хто його затримує, того він вбиває силою вітру.',
    element: Element.Wind,
    level: 2,
    maxLevel: 5,
    attack: 13,
    defense: 10,
    health: 12,
    price: 35,
    skills: [
      windSkillsObject[WindSkillNames['Подих вітру']],
      windSkillsObject[WindSkillNames['Удар вітру']],
      windSkillsObject[WindSkillNames['Хуртовина']],
      generalSkillsObject[GeneralSkillNames['Удар блискавкою']],
    ],
    levelBoost: {
      attack: 1,
      defense: 2,
      health: 1,
      price: 4,
    },
  },
  {
    name: 'Посвистач',
    bio: "Посви́стач, або По́хвист — слов'янський дух та можливий руський (давньоукраїнський) бог вітрів та погоди,",
    element: Element.Wind,
    level: 3,
    maxLevel: 5,
    attack: 18,
    defense: 14,
    health: 18,
    price: 50,
    skills: [
      windSkillsObject[WindSkillNames['Смерч']],
      windSkillsObject[WindSkillNames['Подих вітру']],
      windSkillsObject[WindSkillNames['Удар вітру']],
      windSkillsObject[WindSkillNames['Хуртовина']],
      windSkillsObject[WindSkillNames['Торнадо']],
      windSkillsObject[WindSkillNames['Непогода']],
    ],
    levelBoost: {
      attack: 2,
      defense: 2,
      health: 2,
      price: 6,
    },
  },
  {
    name: 'Стрибог',
    bio: "Бог вітру (вихору, бурі) у давніх слов'ян.",
    element: Element.Wind,
    level: 3,
    maxLevel: 5,
    attack: 19,
    defense: 18,
    health: 20,
    price: 57,
    skills: [
      windSkillsObject[WindSkillNames['Удар вітру']],
      windSkillsObject[WindSkillNames['Захист вітру']],
      windSkillsObject[WindSkillNames['Непогода']],
      windSkillsObject[WindSkillNames['Торнадо']],
      windSkillsObject[WindSkillNames['Хуртовина']],
      windSkillsObject[WindSkillNames['Смерч']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 2,
      price: 4,
    },
  },
];

export const waterCreatures: Creature<Element.Water, WaterSkillNames>[] = [
  {
    name: 'Русалка',
    bio: 'Персонаж народної демонології, що має вигляд гарної дівчини з довгим розпущеним волоссям, прикрашеним квітами та зіллям.',
    element: Element.Water,
    attack: 7,
    defense: 5,
    health: 7,
    level: 1,
    maxLevel: 2,
    price: 19,
    skills: [generalSkillsObject[GeneralSkillNames['Луч магії']]],
    levelBoost: {
      attack: 1,
      defense: 1,
      price: 3,
      health: 1,
    },
  },
  {
    name: 'Мелюзина',
    bio: 'Міфологічний персонаж, що уособлює різновид морських людей. Мелюзини споріднені з русалками і уособлюють небезпечну морську стихію',
    element: Element.Water,
    attack: 7,
    defense: 7,
    health: 8,
    price: 22,
    level: 1,
    maxLevel: 3,
    skills: [
      waterSkillsObject[WaterSkillNames['Морська Хвиля']],
      waterSkillsObject[WaterSkillNames['Танець Води']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 0,
      price: 2,
    },
  },
  {
    name: 'Берегиня',
    element: Element.Water,
    bio: 'Різновид русалки, потопельниця, що мешкає біля берега',
    attack: 10,
    defense: 9,
    health: 12,
    level: 2,
    maxLevel: 5,
    price: 31,
    skills: [
      waterSkillsObject[WaterSkillNames['Морська Хвиля']],
      waterSkillsObject[WaterSkillNames['Повінь']],
      waterSkillsObject[WaterSkillNames['Танець Води']],
    ],
    levelBoost: {
      attack: 2,
      defense: 1,
      price: 4,
      health: 1,
    },
  },
  {
    name: 'Болотяник',
    bio: "Дух-хазяїн болота з лихою вдачею у слов'янській міфології. Родич лісовика та водяника.",
    element: Element.Water,
    attack: 13,
    defense: 10,
    health: 12,
    level: 2,
    maxLevel: 5,
    price: 35,
    skills: [
      waterSkillsObject[WaterSkillNames['Танець Води']],
      waterSkillsObject[WaterSkillNames['Морська Хвиля']],
      waterSkillsObject[WaterSkillNames['Повінь']],
      generalSkillsObject[GeneralSkillNames['Відновлення Енергії']],
    ],
    levelBoost: {
      attack: 1,
      defense: 2,
      health: 1,
      price: 4,
    },
  },
  {
    name: 'Водяник',
    element: Element.Water,
    bio: "Персонаж народної демонології, дух річок, озер, криниць, уособлення небезпечної водяної стихії. Його уявляють у вигляді вкритого водоростями дідуся з довгою бородою та риб'ячим хвостом",
    attack: 11,
    defense: 11,
    health: 12,
    level: 2,
    maxLevel: 5,
    price: 34,
    skills: [
      waterSkillsObject[WaterSkillNames['Морська Хвиля']],
      waterSkillsObject[WaterSkillNames['Повінь']],
      waterSkillsObject[WaterSkillNames['Дух Берегині']],
      generalSkillsObject[GeneralSkillNames['Чарівний щит']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      price: 3,
      health: 1,
    },
  },
  {
    name: 'Дана',
    bio: "Гіпотетична богиня води в слов'янській міфології, покровителька річок, струмків і водойм",
    element: Element.Water,
    attack: 19,
    defense: 16,
    health: 20,
    price: 55,
    level: 3,
    maxLevel: 5,
    skills: [
      generalSkillsObject['Відновлення Енергії'],
      waterSkillsObject['Голос Океану'],
      waterSkillsObject['Морська Підтримка'],
      waterSkillsObject['Дух Берегині'],
      waterSkillsObject['Спів Русалки'],
      waterSkillsObject['Повінь'],
    ],
    levelBoost: {
      attack: 2,
      defense: 2,
      health: 2,
      price: 6,
    },
  },
];

export const natureCreatures: Creature<Element.Nature, NatureSkillNames>[] = [
  {
    name: 'Хуха',
    bio: "Лісовий дух в слов'янській міфології. В сучасних джерелах описуються як пухнасті різнобарвні істоти",
    element: Element.Nature,
    attack: 6,
    defense: 8,
    health: 7,
    level: 1,
    maxLevel: 3,
    price: 21,
    skills: [
      generalSkillsObject[GeneralSkillNames['Луч магії']],
      natureSkillsObject[NatureSkillNames['Лоза']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 1,
      price: 3,
    },
  },
  {
    name: 'Чугайстер',
    element: Element.Nature,
    bio: 'У легендах та міфах Чугайстер зустрічається у вигляді високого «лісового чоловіка», покритого довгим волоссям та вбраного у білий одяг.',
    attack: 5,
    defense: 7,
    health: 9,
    level: 1,
    maxLevel: 2,
    price: 21,
    skills: [
      natureSkillsObject[NatureSkillNames['Коріння']],
      generalSkillsObject[GeneralSkillNames['Луч магії']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      price: 3,
      health: 1,
    },
  },
  {
    name: 'Мавка',
    element: Element.Nature,
    bio: 'Лісове божество в образі гарної дівчини з розпущеним волоссям, прикрашеним квітами',
    attack: 7,
    defense: 10,
    health: 13,
    level: 2,
    maxLevel: 4,
    price: 30,
    skills: [
      generalSkillsObject[GeneralSkillNames['Луч магії']],
      natureSkillsObject[NatureSkillNames['Коріння']],
      natureSkillsObject[NatureSkillNames['Таємниці чарівного лісу']],
      natureSkillsObject[NatureSkillNames['Розлом Землі']],
    ],
    levelBoost: {
      attack: 2,
      defense: 1,
      price: 5,
      health: 2,
    },
  },
  {
    name: 'Польовик',
    bio: "Персонаж слов'янської міфології, дух-покровитель полів, степів і лук.",
    element: Element.Nature,
    attack: 9,
    defense: 13,
    health: 10,
    level: 2,
    maxLevel: 5,
    price: 32,
    skills: [
      generalSkillsObject[GeneralSkillNames['Луч магії']],
      generalSkillsObject[GeneralSkillNames['Чарівний щит']],
      natureSkillsObject[NatureSkillNames['Лоза']],
      natureSkillsObject[NatureSkillNames['Коріння']],
      natureSkillsObject[NatureSkillNames['Розлом Землі']],
    ],
    levelBoost: {
      attack: 1,
      defense: 1,
      health: 2,
      price: 4,
    },
  },
  {
    name: 'Лісовик',
    element: Element.Nature,
    bio: 'Дух лісу, випасає лісову худобу (оленів, козуль, ведмедів..., допомагає тим, хто шанує й береже ліс, не шкодить лісовим мешканцям, поважає духів, частує їх гостинцями',
    attack: 10,
    defense: 12,
    health: 13,
    level: 2,
    maxLevel: 5,
    price: 35,
    skills: [
      natureSkillsObject[NatureSkillNames['Коріння']],
      natureSkillsObject[NatureSkillNames['Гілля дуба']],
      natureSkillsObject[NatureSkillNames['Шкіра Лісовика']],
      natureSkillsObject[NatureSkillNames['Таємниці чарівного лісу']],
    ],
    levelBoost: {
      attack: 1,
      defense: 2,
      price: 4,
      health: 1,
    },
  },
  {
    name: 'Ох',
    bio: "Українська мітична істота, правитель Лісового Царства. Описується як низького зросту дід, увесь зеленого кольору з довгою бородою. З'являється після того, як хтось, сівши на пеньок, вигукує слово «ох»",
    element: Element.Nature,
    attack: 14,
    defense: 16,
    health: 23,
    price: 53,
    level: 3,
    maxLevel: 5,
    skills: [
      natureSkillsObject[NatureSkillNames['Викликати Оха']],
      natureSkillsObject[NatureSkillNames['Таємниці чарівного лісу']],
      natureSkillsObject[NatureSkillNames['Розлом Землі']],
      natureSkillsObject[NatureSkillNames['Гілля дуба']],
      natureSkillsObject[NatureSkillNames['Коріння']],
      natureSkillsObject[NatureSkillNames['Лоза']],
    ],
    levelBoost: {
      attack: 2,
      defense: 2,
      health: 1,
      price: 5,
    },
  },
];

export const creatures: Creature<Element, SkillNames>[] = [
  ...fireCreatures,
  ...natureCreatures,
  ...waterCreatures,
  ...windCreatures,
  ...direCreatures,
  ...lightCreatures,
];

export const creaturesObject: Record<
  string,
  Creature<Element, SkillNames>
> = arrayToObject(creatures);
