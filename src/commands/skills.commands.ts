import { Telegraf } from 'telegraf';
import { getRandomFromList, stringifySkill } from '../utils';
import { skills } from '../data/skills';
import { StringifyType } from '../types';
import { SkillNames } from '../models/Skill.model';

export const initSkillsCommands = (bot: Telegraf) => {
  bot.command('visit_university', (ctx) => {
    let skillsList = '';
    const uniqueSkillNames: SkillNames[] = [];
    for (let i = 0; i < 3; i++) {
      const randomSkill = getRandomFromList(skills);
      if (uniqueSkillNames.includes(randomSkill.name)) {
        --i;
      } else {
        skillsList += stringifySkill(randomSkill, StringifyType.Long);
        uniqueSkillNames.push(randomSkill.name);
      }
    }
    ctx.reply(skillsList);
  });
};
