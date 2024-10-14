import { Input, Telegraf } from 'telegraf';
import { join } from 'path';
import { allItems } from '../data/items';
import {
  stringifyArtifact,
  stringifyCharacter,
  stringifyCreature,
  stringifyItem,
  stringifySkill,
} from '../utils';
import { StringifyType } from '../types';
import { artifacts } from '../data/artifacts';
import { creatures } from '../data/creatures';
import { skills } from '../data/skills';
import { characters } from '../data/character';

export const initCommonCommands = (bot: Telegraf) => {
  bot.command('rules', (ctx) => {
    ctx.replyWithDocument(
      Input.fromLocalFile(join(__dirname, '../../Readme.md')),
    );
  });
  bot.command('start', (ctx) => {
    ctx.reply('Ласкаво просимо до гри Казка');
    ctx.reply('https://www.youtube.com/watch?v=vyg5jJrZ42s');
  });
  bot.on('message', (ctx) => {
    if (!('text' in ctx.message)) {
      ctx.reply('no text');
      return;
    }
    const userInput = ctx.message.text.toLowerCase();

    const creature = creatures.find((creature) =>
      creature.name.toLowerCase().match(userInput),
    );
    if (creature) {
      ctx.replyWithPhoto(
        Input.fromLocalFile(
          join(__dirname, `../assets/images/creatures/${creature.name}.jpg`),
        ),
      );
      return ctx.reply(stringifyCreature(creature, StringifyType.Long));
    }
    const item = allItems.find((item) =>
      item.name.toLowerCase().match(userInput),
    );
    if (item) {
      ctx.replyWithPhoto(
        Input.fromLocalFile(
          join(__dirname, `../assets/images/items/${item.name}.jpg`),
        ),
      );
      return ctx.reply(stringifyItem(item, StringifyType.Long));
    }
    const character = characters.find((character) =>
      character.name.toLowerCase().match(userInput),
    );
    if (character) {
      ctx.replyWithPhoto(
        Input.fromLocalFile(
          join(__dirname, `../assets/images/characters/${character.name}.jpg`),
        ),
      );
      return ctx.reply(stringifyCharacter(character, StringifyType.Long));
    }
    const skill = skills.find((skill) =>
      skill.name.toLocaleLowerCase().match(userInput),
    );
    if (skill) {
      return ctx.reply(stringifySkill(skill, StringifyType.Long));
    }
    const artifact = artifacts.find((artifact) =>
      artifact.name.toLowerCase().match(userInput),
    );
    if (artifact) {
      ctx.replyWithPhoto(
        Input.fromLocalFile(
          join(__dirname, `../assets/images/artifacts/${artifact.name}.jpg`),
        ),
      );
      return ctx.reply(stringifyArtifact(artifact, StringifyType.Long));
    }
  });
};
