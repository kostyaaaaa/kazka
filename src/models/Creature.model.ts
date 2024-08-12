import { Element } from '../types';
import { GeneralSkillNames, Skill, SkillNames } from './Skill.model';

export type CreatureLevel = 1 | 2 | 3 | 4 | 5;
type CreatureLevelBoost = {
  attack: number;
  defense: number;
  health: number;
  price: number;
};

export type Creature<
  CreatureElement extends Element,
  ElementSkillNames extends SkillNames,
> = {
  name: string;
  bio: string;
  attack: number;
  defense: number;
  health: number;
  element: CreatureElement;
  level: CreatureLevel;
  maxLevel: CreatureLevel;
  levelBoost: CreatureLevelBoost;
  price: number;
  skills: Skill<
    CreatureElement | Element.General,
    ElementSkillNames | GeneralSkillNames
  >[];
};
