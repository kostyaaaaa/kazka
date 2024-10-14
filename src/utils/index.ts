import { Artifact } from '../models/Artifact.model';
import { Character } from '../models/Character.model';
import { Creature } from '../models/Creature.model';
import { Item } from '../models/Item.model';
import { Skill, SkillNames } from '../models/Skill.model';
import { Element, StringifyType } from '../types';

export const getRandomFromList = <T>(list: T[]): T => {
  const maxValue = list.length - 1;
  const randomIndex = Math.floor(Math.random() * maxValue);
  return list[randomIndex];
};

export const skillsToObject = <
  SkillElement extends Element,
  ElementSkillNames extends SkillNames,
>(
  list: Skill<SkillElement, ElementSkillNames>[],
): Record<ElementSkillNames, Skill<SkillElement, ElementSkillNames>> => {
  return list.reduce((accumulator, currentItem) => {
    accumulator[currentItem.name] = currentItem;
    return accumulator;
  }, {} as Record<ElementSkillNames, Skill<SkillElement, ElementSkillNames>>);
};

export const arrayToObject = <T extends Creature<any, any> | Item | Artifact>(
  list: T[],
): Record<string, T> => {
  return list.reduce((accumulator, currentItem) => {
    accumulator[currentItem.name] = currentItem;
    return accumulator;
  }, {} as Record<string, T>);
};

export const stringifyItem = (
  item: Item,
  stringifyType: StringifyType,
): string => {
  if (stringifyType === StringifyType.Long) {
    return `Предмет '${item.name}', ${item.description}, ${item.price}$, Вага - ${item.weight}, Макс. кількість - ${item.maxCount}\n\n`;
  }
  return `${item.name}\n`;
};

export const stringifyArtifact = (
  artifact: Artifact,
  stringifyType: StringifyType,
): string => {
  if (stringifyType === StringifyType.Long) {
    let stringifiedRecipe = '';
    Object.entries(artifact.recipe).forEach(([key, value], index, array) => {
      const suffix = index === array.length - 1 ? '' : ', ';
      stringifiedRecipe += `${key}: ${value}${suffix}`;
    });
    return `Артефакт '${artifact.name}'\n${artifact.description}\nЦіна - ${artifact.price}$\nСлот - ${artifact.slot}\nВага - ${artifact.weight}\nМакс. кількість - ${artifact.maxCount}\nРецепт - ${stringifiedRecipe}`;
  }
  return `Артефакт '${artifact.name}'\n`;
};

export const stringifySkill = (
  skill: Skill<any, any>,
  stringifyType: StringifyType,
): string => {
  if (stringifyType === StringifyType.Long) {
    return `Вміння '${skill.name}', ${skill.description}. Стихія - ${
      skill.element
    }, Тип - ${skill.type}, Дальність - ${
      'range' in skill ? skill.range : '-'
    }, Ціль - ${skill.target}, Необхідний рівень - ${
      skill.requiredLevel
    }, Необхідний інтелект - ${skill.requiredIntelligence}\n\n`;
  }
  return `Вміння '${skill.name}'. `;
};

export const stringifyCreature = (
  creature: Creature<any, any>,
  stringifyType: StringifyType,
): string => {
  let stringifiedSkills = '';
  creature.skills.forEach((skill) => {
    stringifiedSkills += stringifySkill(skill, StringifyType.Long);
  });
  if (stringifyType === StringifyType.Long) {
    return `${creature.name}, ${creature.bio}\nАтака - ${creature.attack}\nЗахист - ${creature.defense}\nЗдоров'я - ${creature.defense}\nСтихія - ${creature.element}\nРівень - ${creature.level}\nМаксимальний рівень - ${creature.maxLevel}\nЦіна - ${creature.price}\nБонуси за рівень - Атака, Захист, Здоров'я, Ціна (${creature.levelBoost.attack}, ${creature.levelBoost.defense}, ${creature.levelBoost.health}, ${creature.levelBoost.price})\n\n${stringifiedSkills}`;
  }
  stringifiedSkills = '';
  creature.skills.forEach((skill) => {
    stringifiedSkills += stringifySkill(skill, StringifyType.Short);
  });
  return `${creature.name}\nАтака - ${creature.attack}\nЗахист - ${creature.defense}\nЗдоров'я - ${creature.health}\nСтихія - ${creature.element}\nРівень - ${creature.level}\n${stringifiedSkills}`;
};

export const stringifyCharacter = (
  character: Character,
  stringifyType: StringifyType,
): string => {
  let stringifiedItems = '';
  character.items.forEach((item) => {
    stringifiedItems += stringifyItem(item, StringifyType.Short);
  });
  let stringifiedArtifacts = '';
  character.artifacts.forEach((artifact) => {
    stringifiedArtifacts += stringifyArtifact(artifact, StringifyType.Short);
  });
  let stringifiedCharacteristics = '';
  Object.entries(character.stats).forEach(([key, value]) => {
    stringifiedCharacteristics += `${key} ${value}\n`;
  });
  if (stringifyType === StringifyType.Long) {
    return `${character.name}\nВік - ${character.age}\nЗріст - ${character.height}\nІсторія - ${character.background}\nМоже підняти - ${character.carryingWeight}\nЗолото - ${character.gold}\n\nПредмети:\n${stringifiedItems}\nАртефакти:\n${stringifiedArtifacts}\nХарактеристики:\n${stringifiedCharacteristics}\n`;
  }
  return `${character.name}`;
};
