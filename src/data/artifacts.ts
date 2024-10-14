import { Artifact, ArtifactSlots } from '../models/Artifact.model';
import { ItemNames } from '../models/Item.model';
import { arrayToObject } from '../utils';

export const artifacts: Artifact[] = [
  {
    name: 'Сандалі Стрибога',
    description:
      'Сандалі Стрибога, бога вітру. Збільшують характеристику Спритності та Втечі персонажа на 1.',
    price: 40,
    maxCount: 1,
    weight: 15,
    slot: ArtifactSlots.Feet,
    recipe: {
      [ItemNames['Деревина']]: 1,
      [ItemNames['Залізна Руда']]: 1,
    },
  },
  {
    name: 'Плащ невидимка',
    description:
      'Плащ, з луски русалок. Збільшує характеристику Викрадення та Втечі на 2.',
    price: 55,
    maxCount: 1,
    weight: 30,
    slot: ArtifactSlots.Back,
    recipe: {
      [ItemNames['Папір']]: 1,
      [ItemNames['Срібне Кільце']]: 1,
    },
  },
  {
    name: 'Окуляри з скарбниці Велеса',
    description:
      'Окуляри, які були вкрадені з скарбниці бога достатку та багатств. Збільшують характеристику Пошуку на 2.',
    price: 50,
    maxCount: 1,
    weight: 10,
    slot: ArtifactSlots.Head,
    recipe: {
      [ItemNames['Залізна Руда']]: 1,
      [ItemNames['Срібне Кільце']]: 1,
    },
  },
  {
    name: 'Книга Мольфара',
    description:
      'Книга Мольфара, в якій записані чари. Збільшує характеристику Лікування на 1',
    price: 40,
    maxCount: 1,
    weight: 25,
    slot: ArtifactSlots.Hands,
    recipe: {
      [ItemNames['Папір']]: 2,
    },
  },
  {
    name: 'Тризуб',
    description:
      'Зброя, яка здатна підкорювати моря й океани. Збільшує характеристику точності на 1',
    price: 40,
    maxCount: 1,
    weight: 30,
    slot: ArtifactSlots.Hands,
    recipe: {
      [ItemNames['Залізна Руда']]: 2,
    },
  },
  {
    name: 'Корона Чахлика Невмирущого',
    description:
      'Святиня могутнього Чахлика Невмирущого. Збільшує характеристику приорітету на 1',
    price: 50,
    maxCount: 1,
    weight: 25,
    slot: ArtifactSlots.Feet,
    recipe: {
      [ItemNames['Золоте Кільце']]: 1,
      [ItemNames['Залізна Руда']]: 1,
    },
  },
];

export const artifactsObject = arrayToObject(artifacts);
