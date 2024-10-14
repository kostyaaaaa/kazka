import { Artifact } from './Artifact.model';
import { Item } from './Item.model';

type CharacterStatValue = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;

export enum CharacterStats {
  Strength = 'Сила',
  Agility = 'Спритність',
  Stealing = 'Викрадення',
  Scouting = 'Пошук',
  Escape = 'Втеча',
  Intelligence = 'Інтелект',
  Healing = 'Лікування',
  Charisma = 'Харизма',
  Accuracy = 'Точність',
  Priority = 'Приорітет',
  Resistance = 'Опір',
  Alchemy = 'Алхімія',
}

export type Character = {
  name: string;
  age: number;
  height: number;
  background: string;
  gold: number;
  carryingWeight: number;
  stats: Record<CharacterStats, CharacterStatValue>;
  items: Item[];
  artifacts: Artifact[];
};
