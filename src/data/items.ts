import { Item, ItemNames } from '../models/Item.model';
import { arrayToObject } from '../utils';

export const stones: Item[] = [
  {
    name: ItemNames['Камінь обміну'],
    price: 5,
    description:
      'Зачарований камінь, який використовується для обміну істотами, артефактами між гравцями. Не можна передавати. Щоб передати Істоту або Артефакт, достатньо мати 1 камінь. Після використання камінь пропадає.',
    maxCount: 50,
    weight: 1,
  },
  {
    name: ItemNames['Камінь Душі'],
    price: 5,
    description: 'Зачарований камінь, в який можна сховати душу Істоти',
    maxCount: 10,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Стихії Природи'],
    price: 25,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 15,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Стихії Вогню'],
    price: 25,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 15,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Стихії Вітру'],
    price: 25,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 15,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Стихії Води'],
    price: 25,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 15,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Стихії Світла'],
    price: 25,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 15,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Стихії Темряви'],
    price: 25,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 15,
    weight: 5,
  },
  {
    name: ItemNames['Камінь Універсальної стихії'],
    price: 45,
    description:
      'Зачарований камінь, за допомогою якого можна підняти рівень істоти на 1. Після використання камінь пропадає',
    maxCount: 1,
    weight: 5,
  },
];

export const usableItems: Item[] = [
  ...stones,
  {
    name: ItemNames['Подорожник'],
    price: 5,
    description:
      "Трава, яка використовується для лікування істот. Лікує 2 здоров'я",
    maxCount: 20,
    weight: 2,
  },
  {
    name: ItemNames['Зілля відновлення'],
    price: 10,
    description:
      "Зілля, яке використовується для лікування істот. Лікує 5 здоров'я",
    maxCount: 10,
    weight: 10,
  },
  {
    name: ItemNames['Казан з зіллям відновлення'],
    price: 40,
    description:
      "Великий казан, з зіллям відновлення. Лікує 10 здоров'я усім істотам персонажа",
    maxCount: 1,
    weight: 40,
  },
  {
    name: ItemNames['Рюкзак'],
    price: 30,
    description:
      'Рюкзак, який можна вдягнути, аби збільшити кількість багажу, який можна носити з собою. Носима вага +50',
    maxCount: 1,
    weight: 0,
  },
];

export const lootItems: Item[] = [
  {
    name: ItemNames['Папір'],
    price: 5,
    description:
      "Папір — це універсальний ігровий матеріал, що використовується для створення різноманітних об'єктів та інструментів",
    maxCount: 5,
    weight: 3,
  },
  {
    name: ItemNames['Залізна Руда'],
    price: 5,
    description:
      "Метал — це універсальний ігровий матеріал, що використовується для створення різноманітних об'єктів та інструментів",
    maxCount: 5,
    weight: 10,
  },
  {
    name: ItemNames['Деревина'],
    price: 5,
    description:
      "Деревина — це універсальний ігровий матеріал, що використовується для створення різноманітних об'єктів та інструментів",
    maxCount: 5,
    weight: 5,
  },
  {
    name: ItemNames['Золоте Кільце'],
    price: 30,
    description: 'Золота прикраса, яку можна продати на ринку',
    maxCount: 3,
    weight: 10,
  },
  {
    name: ItemNames['Срібне Кільце'],
    price: 20,
    description: 'Срібна прикраса, яку можна продати на ринку',
    maxCount: 3,
    weight: 10,
  },
  {
    name: ItemNames['Шкіра вбитої істоти'],
    price: 15,
    description: 'Шкіра істоти, що була переможена',
    maxCount: 10,
    weight: 5,
  },
  {
    name: ItemNames['Попіл вбитої істоти'],
    price: 5,
    description: 'Попіл істоти, що була переможена',
    maxCount: 10,
    weight: 1,
  },
  {
    name: ItemNames['Зуб вбитої істоти'],
    price: 10,
    description: 'Зуб істоти, що була переможена',
    maxCount: 10,
    weight: 5,
  },
  {
    name: ItemNames['Малий мішечок золота'],
    price: 15,
    description: 'Мішечок, в якому лежить 15 золота',
    maxCount: 100,
    weight: 0,
  },
  {
    name: ItemNames['Сумка з золотом'],
    price: 25,
    description: 'Сумка, в якій лежить 25 золота',
    maxCount: 100,
    weight: 0,
  },
  {
    name: ItemNames['Скринька золота'],
    price: 45,
    description: 'Скринька, в якій лежить 45 золота',
    maxCount: 100,
    weight: 0,
  },
];

export const allItems: Item[] = [...lootItems, ...usableItems];

export const allItemsObject = arrayToObject(allItems);
