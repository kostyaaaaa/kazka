import { Artifact, ArtifactSlots } from '../models/Artifact.model';
import { arrayToObject } from '../utils';

export const artifacts: Artifact[] = [
  {
    name: 'Сандалі Стрибога',
    description:
      'Сандалі Стрибога, бога вітру. Збільшують характеристику Спритності та Втечі персонажа на 1.',
    price: 80,
    maxCount: 1,
    weight: 15,
    slot: ArtifactSlots.Feet,
  },
  {
    name: 'Плащ невидимка',
    description:
      'Плащ, з луски русалок. Збільшує характеристику Викрадення та Втечі на 2.',
    price: 110,
    maxCount: 1,
    weight: 30,
    slot: ArtifactSlots.Back,
  },
  {
    name: 'Окуляри з скарбниці Велеса',
    description:
      'Окуляри, які були вкрадені з скарбниці бога достатку та багатств. Збільшують характеристику Пошуку на 2.',
    price: 100,
    maxCount: 1,
    weight: 10,
    slot: ArtifactSlots.Head,
  },
  {
    name: 'Книга Мольфара',
    description:
      'Книга Мольфара, в якій записані чари. Збільшує характеристику Лікування на 1',
    price: 80,
    maxCount: 1,
    weight: 25,
    slot: ArtifactSlots.Hands,
  },
  {
    name: 'Тризуб',
    description:
      'Зброя, яка здатна підкорювати моря й океани. Збільшує характеристику точності на 1',
    price: 80,
    maxCount: 1,
    weight: 30,
    slot: ArtifactSlots.Hands,
  },
  {
    name: 'Корона Чахлика Невмирущого',
    description:
      'Святиня могутнього Чахлика Невмирущого. Збільшує характеристику приорітету на 1',
    price: 100,
    maxCount: 1,
    weight: 25,
    slot: ArtifactSlots.Feet,
  },
];

export const artifactsObject = arrayToObject(artifacts);
