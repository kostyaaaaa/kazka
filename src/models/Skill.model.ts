import { Element } from '../types';
import { CreatureLevel } from './Creature.model';

export enum SkillType {
  Attack = 'Атака',
  Defense = 'Захист',
}

export enum SkillRangeType {
  Melee = 'Ближній',
  Range = 'Дальній',
}

export enum AttackSkillTarget {
  Single = 'Одна істота ворога',
  Multiple = 'Усі істоти ворога',
  All = 'Усі на полі бою',
  NonDirectional = 'Ненаправлений',
}

export enum DefenseSkillTarget {
  Self = 'Власник',
  Ally = 'Власник, або союзник',
  Allies = 'Усі союзнкики',
  All = 'Усі на полі бою',
  NonDirectional = 'Ненаправлений',
}

type DefaultSkill<CreatureElement, ElementSkillName> = {
  element: CreatureElement[];
  requiredIntelligence: number;
  name: ElementSkillName;
  requiredLevel: CreatureLevel;
};

type AttackSkill<CreatureElement, ElementSkillName> = DefaultSkill<
  CreatureElement,
  ElementSkillName
> & {
  type: SkillType.Attack;
  target: AttackSkillTarget;
  description: string;
  range: SkillRangeType;
};

type DefenseSkill<CreatureElement, ElementSkillName> = DefaultSkill<
  CreatureElement,
  ElementSkillName
> & {
  type: SkillType.Defense;
  target: DefenseSkillTarget;
  description: string;
};

export type Skill<
  CreatureElement extends Element,
  ElementSkillName extends SkillNames,
> =
  | AttackSkill<CreatureElement, ElementSkillName>
  | DefenseSkill<CreatureElement, ElementSkillName>;

export enum FireSkillNames {
  'Вогняна куля' = 'Вогняна куля',
  'Спалах' = 'Спалах',
  'Метеорит' = 'Метеорит',
  'Армагедон' = 'Армагедон',
  'Подих Перелесника' = 'Подих Перелесника',
  'Молитва Дажбога' = 'Молитва Дажбога',
  'Дотик вогню' = 'Дотик вогню',
  'Перо Жар-Птиці' = 'Перо Жар-Птиці',
}
export enum WindSkillNames {
  'Подих вітру' = 'Подих вітру',
  'Удар вітру' = 'Удар вітру',
  'Смерч' = 'Смерч',
  'Хуртовина' = 'Хуртовина',
  'Торнадо' = 'Торнадо',
  'Непогода' = 'Непогода',
  'Захист вітру' = 'Захист вітру',
}
export enum NatureSkillNames {
  'Коріння' = 'Коріння',
  'Лоза' = 'Лоза',
  'Гілля дуба' = 'Гілля дуба',
  'Шкіра Лісовика' = 'Шкіра Лісовика',
  'Таємниці чарівного лісу' = 'Таємниці чарівного лісу',
  'Викликати Оха' = 'Викликати Оха',
  'Розлом Землі' = 'Розлом Землі',
}
export enum WaterSkillNames {
  'Морська Хвиля' = 'Морська Хвиля',
  'Спів Русалки' = 'Спів Русалки',
  'Повінь' = 'Повінь',
  'Дух Берегині' = 'Дух Берегині',
  'Голос Океану' = 'Голос Океану',
  'Танець Води' = 'Танець Води',
  'Морська Підтримка' = 'Морська Підтримка',
}
export enum DireSkillNames {
  'Лихоманка' = 'Лихоманка',
  'Примарний Подих' = 'Примарний Подих',
  'Ніч Чорнобога' = 'Ніч Чорнобога',
  'Сміх потерчат' = 'Сміх потерчат',
  'Тіньова Завіса' = 'Тіньова Завіса',
  'Нечиста сила' = 'Нечиста сила',
  'Поглинання Світла' = 'Поглинання Світла',
  'Чорний Клинок' = 'Чорний Клинок',
}
export enum LightSkillNames {
  'Молитва' = 'Молитва',
  'Благословення' = 'Благословення',
  'Осяяння Ярчука' = 'Осяяння Ярчука',
  'Слово Білобога' = 'Слово Білобога',
  'Небесне Світло' = 'Небесне Світло',
  'Аура Світу' = 'Аура Світу',
  'Світловий Вибух' = 'Світловий Вибух',
  'Краплина Сяйва' = 'Краплина Сяйва',
}
export enum GeneralSkillNames {
  'Луч магії' = 'Луч магії',
  'Удар блискавкою' = 'Удар блискавкою',
  'Чарівний щит' = 'Чарівний щит',
  'Магічний Погляд' = 'Магічний Погляд',
  'Відновлення Енергії' = 'Відновлення Енергії',
}

export type SkillNames =
  | GeneralSkillNames
  | DireSkillNames
  | LightSkillNames
  | WaterSkillNames
  | WindSkillNames
  | FireSkillNames
  | NatureSkillNames;
